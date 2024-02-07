import { CartWidget } from "../common/CartWidget"

export const Navbar = () => {
    
    return <div>
        <img src="https://res.cloudinary.com/daiikhnag/image/upload/v1707272308/images_gesb63.jpg" alt="Logo del Centro de Estética" />
        <ul>
            <li>Aparatología</li>
            <li>Cremas</li>
            <li>Kit Cosmetología</li>
        </ul>
        <h4>Carrito de Compras</h4>
        <CartWidget />
    </div>

}


