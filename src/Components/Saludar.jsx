export const Saludar = () => {
    const nombre = 'Maicol'; {/* LAS LLAVES INTERPRETAN CODIGO COMO SER UNA VARIABLE STATE*/ }
    const numOne = 10;
    const numTwo = 20;
    const estado = true;
    const usuario = {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 20,
        estado: true,
        saludar: (edad) => {
            console.log(`Hola, me llamo ${nombre} ${edad}`);
        }
    }
    // const resultado = estado ? 'Casado' : 'Soltero'
    return (
        <>
            <ul>
                <li>Nombre: {nombre} </li>
                <li>Calcular: {numOne + numTwo}</li>
                <li>Estado: {estado ? 'Casado' : 'Soltero 😎'} </li>
                {/* JSON.stringify(object) CONVIERTO TODO A STRING Y LO MUESTRA */}
                <li>Objeto: {usuario.nombre}{usuario.saludar(12)}</li>
                {/* CONVERTIR DE UN BOOLEANO A UN STRING PARA MOSTRAR SI ES TRUE O FALSE*/}
                <li>Booleano: {estado.toString()}</li>
            </ul>
        </>
    )
}
export const Trabajo = () => {
    return (
        <h1>Trabajo</h1>
    )
}