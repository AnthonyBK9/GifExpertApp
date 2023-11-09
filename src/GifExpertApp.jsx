import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {

      if(categories.includes(newCategory)) return
        //console.log('Black Clover');
        setCategories( [ newCategory, ...categories ] )
        //setCategories( cat => [...categories, 'Black Clover'])
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
          onNewCategory={ e => onAddCategory(e) }
        />

        { categories.map( category => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
    </>
  )
}

export default GifExpertApp