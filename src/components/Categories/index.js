import React from "react";
import ProductsList from "../ProductsList/index.js";
import './styles.css'
const Categories = ({categories}) => {
    return (
        <div className="categories">
            {categories.map((item, index) => (
            <div key={index} className="category">
                <h1 style={{fontFamily: "Light"}}>{item.name}</h1>
                <ProductsList items={item.products}/>
            </div>
            ))}
        </div>
    )
}
export default Categories;