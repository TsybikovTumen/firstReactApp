import { useState } from "react";
import { createPortal } from "react-dom";
import imagePlaceHolder from '../../res/images/product-placeholder.png'

import './styles.css';

function ProductImage({ product }) {
  const [open, setOpen] = useState(false);
  const modalContent = (
    <div className="modal" onClick={() => setOpen(false)}>
      <button className="modal-close" onClick={(e) => { 
          e.stopPropagation(); 
          setOpen(false); 
      }}>
        ✕
      </button>

      <img src={product.img || product.image} alt={product.product_name || product.name} className="modal-image" />
    </div>
  );

  return (
    <>
      <img
        src={product.img || product.image || imagePlaceHolder}
        alt={product.product_name || product.name || 'Товар'}
        className="product-image"
        onClick={() => setOpen(true)}
        style={{ cursor: "pointer" }}
      />

      {open && (product.img || product.image) && createPortal(modalContent, document.getElementById("modal-root"))}
    </>
  );
}

export default ProductImage;
