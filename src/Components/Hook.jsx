import { useEffect, useState } from "react"
 // USESTATE HOOK
let counter = 0
const sumar  = () => {
    // counter = counter + 10
    setCounter(0)
}
export const Counter = () => {
    const [ counter, setCounter ] = useState(0);
    return (
    <>
    <h1>Contar {counter}</h1>
    <button onClick={() => {
        setCounter(counter + 1)
    }}>Sumar</button>
    <button onClick={() => {
        setCounter(counter - 1)
    }}>Restar</button>
    <button onClick={() => {
        setCounter(0)
    }}>Reiniciar</button>
    </>
    )
}

export const StateInput = () => {
    const [mensaje, setMensaje] = useState('');
    const [counter, setCounter] = useState(0);
 // SE EJECUTA UN USEEFFECT CADA VEZ QUE EXISTA UN CAMBIO DENTRO DEL COMPONENTE EN ESTE CASO DEL STATEINPUT
    // useEffect(function (){
    //     console.log('State Input');
    // });
    // * PARA QUE SOLO SE EJECUTE UNA SOLA VEZ SE LA AÑADE UN ARRAY VACIO
    useEffect(function (){
            console.log('State Input');
        }, []);
    return (
    <div>
        <input type="text" onChange={(e) => {setMensaje(e.target.value)}}/>
        <button onClick={() => {alert('El mensaje es:'+mensaje)}}>Guardar</button>
        <h1>Counter: {counter}</h1>
        <button onClick={() =>{setCounter(counter + 1)}}>Incrementar</button>
    </div>
    )
}