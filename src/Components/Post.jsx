import {BiAddToQueue} from 'react-icons/bi'
const getApi = () => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error))
}
export const Post = () => {
    return <button onClick={getApi}>
        Obtener Datos <BiAddToQueue/>
    </button>
}