import ItemCountContainer from "../../common/itemCount/ItemCountContainer";

import "./ItemDetailContainer.css"


export const ItemDetail = ({ img, description, title, price, stock }) => {
  
  return (
    <div className="cardContainer">
      <div className="detailContainer"> 
        <img src={img} alt="" />
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h4>Precio: ${price}</h4>
      </div>
      <div className="counter">
        <ItemCountContainer stock={stock}/>
      </div>
    </div>  
  );
};
