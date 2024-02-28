import { BeatLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { getProduct } from "../../../asyncMock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../itemDetailContainer/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

//  const navigate = useNavigate()

  useEffect(() => {
    console.log("ID:", id);
    getProduct(+id).then((resp) => {
      setItem(resp);
      setLoading(false);
    });
    
  }, [id]);

  return (
    <>
      {loading ? (
        <BeatLoader size={15} color="#333" loading={loading} />
      ) : (
        <ItemDetail {...item} />
      )}
    </>
  );
};
