import React from "react";

const ButtonCard = ({ product }) => {
    const ButtonClick = () => {
        alert(`Added ${product.title} to cart`);
    }
    return (
        <button className="button-card" onClick={ButtonClick}>Add to cart</button>
    )
};

export default ButtonCard;