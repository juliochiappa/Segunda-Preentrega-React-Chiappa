import { getProducts } from "../../../asyncMock";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { BeatLoader } from "react-spinners";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const {category} = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts().then((resp) => {
      if (category){
        const productsFilter = resp.filter(product => product.category === category);
        setItems(productsFilter);
      } else {
        setItems (resp);
      }
      setLoading(false);
      
    });
  }, [category]);

  return (
    <>
      {loading ? (<BeatLoader size={15} color="#333" loading={loading}/>) : (<ItemList items={items} />)}
    </>
  );
};
