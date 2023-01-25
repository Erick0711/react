const Product = ({title,name = "User"}) => { // props.title O SOLO MUESTRA EL VALOR DE ESE OBJETO {TITLE}
    return <p>Producto {title}-{name}</p>
}

export const Navbar = () => {
    return <nav>Navigattion</nav>
}

export const UserCard = (props) => { // RESIVIENDO LOS DATOS DE UNA VARIABLE O UN PARAMETRO
    // console.log(props)
    return (
    <ul>
        <li>{props.name}</li>
        <li>{props.amount} $</li>
        <li>{props.state ? 'Casado' : 'Soltera'}</li>
        <li>{props.points[0]} puntos</li>
        <li>{props.address.street}-{props.address.city}</li>
        {/* <li>{props.greet()}</li> */}
    </ul>
    )
}

export default Product