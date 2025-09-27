import { useState } from "react";
import { createPortal } from "react-dom";
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

      <img src={product.image} alt={product.name} className="modal-image" />
    </div>
  );

  return (
    <>
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
        onClick={() => setOpen(true)}
        style={{ cursor: "pointer" }}
      />

      {open && createPortal(modalContent, document.getElementById("modal-root"))}
    </>
  );
}

export default ProductImage;
