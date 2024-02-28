import "./ItemCount.css"

const ItemCount = ( {count, sumaOne, restaOne}) => {
  return (
    <>
        <div>
          <h5>{count}</h5>
          <button onClick={sumaOne}>Sumar</button>
          <button onClick={restaOne} disabled={count === 1 ? true : false}>Restar</button>
          <button className="addToCart">Agregar al carrito</button>
        </div>
    </>
  );
};

export default ItemCount