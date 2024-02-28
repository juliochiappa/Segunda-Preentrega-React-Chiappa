import { ProductCard } from "../../common/ProductCard";
import "./ItemListContainer.css"

export const ItemList = ({ items }) => {
  return (
    <div className="cardsContainer">
     {items.map(({id, img, title, description, price}) => {
        return (
          <ProductCard
            key={id}
            id={id}
            img={img}
            title={title}
            description={description}
            price={price}
          />
        );
      })}
    </div>
  );
};


