import ButtonCard from "./ButtonCard";
import "./index.css"

export function ProductCard(props) {
    const { image, category, title, price} = props.data;
  
    return (
      <div className="product-card">
        <div className="Main">
          <img width="288" height="280" src={image} alt='' />
          <div className="Category">{category}</div>
          <div className="Title">{title}</div>
        </div>

          <div className="Footer">
            <div className="Price">${price}</div>
            <ButtonCard product={props.data} />
          </div>
      </div>
     
    )
};