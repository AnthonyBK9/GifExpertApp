import { useState } from "react"

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

    const onAddCategory = () => {
        //console.log('Black Clover');
        setCategories( [ 'Hola', ...categories ] )
        //setCategories( cat => [...categories, 'Black Clover'])
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        {/*input */}

        {/*Listado de Gif */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            { categories.map( category => {
              return <li key={category}>{category}</li>
            } ) }
        </ol>
    </>
  )
}

export default GifExpertApp