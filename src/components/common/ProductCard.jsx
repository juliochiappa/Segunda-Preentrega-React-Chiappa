
export const ProductCard = ({titulo, desc, precio}) => {
  return (
    <div style={{border: "2px solid black"}}>
        <img src="https://res.cloudinary.com/daiikhnag/image/upload/v1707279450/images_uckazq.jpg"/>
        <h3>{titulo}</h3>
        <h4>{desc}</h4>
        <h4>{precio}</h4>

    </div>
  )
}
