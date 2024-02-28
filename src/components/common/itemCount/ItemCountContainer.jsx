import { useState } from "react"
import ItemCount from "./ItemCount"
const ItemCountContainer = ( { stock } ) => {
    const [count , setCount] = useState ( 1 )
    const sumaOne = () => {
        if (count < stock){
            setCount (count + 1)
        }else{
           alert ("¡ Ha llegado al límite del stock !")
        }
    }
    const restaOne = () => {
        if (count > 1){
            setCount ( count - 1)
        }
     
    }
    return <ItemCount count ={count} sumaOne={sumaOne} restaOne={restaOne}   />
}
export default ItemCountContainer
