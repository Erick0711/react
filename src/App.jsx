import { useState, useEffect } from 'react'
import { Saludar, Trabajo } from './Components/Saludar'
import Product, { Navbar, UserCard } from './Components/Product'
import { Button } from './Components/Button'
import { Post } from './Components/Post'
import { Counter, StateInput } from './Components/Hook'
function App() {
  return (
    <>
      <Button name="hola desde el boton" text="Hola"></Button>
      <hr />
      <Post />
      <hr />
      <Counter/>
      <hr />
      <StateInput/>
      <hr />
      <Navbar />
      <Saludar />
      <Trabajo />
      <Product title="Hola Producto 1" name="Arturo" />
      <Product title="Hola Producto 2" name="Juan" />
      <Product title="Hola Producto 3" />
      <Product title="Hola Producto 4" />
      <UserCard
        name="Lorean"
        amount={3500}
        state={true}
        points={[65, 987, 14, 23]}
        address={{
          street: '123 street',
          city: 'San Francisco'
        }}
        greet={() => { alert('Please enter') }
        }
      />


    </>
  )
}
{/*{Saludar()} FORMA NO MUY ADECUADA DE EJECUTAR UN COMPONENTE*/ }
export default App