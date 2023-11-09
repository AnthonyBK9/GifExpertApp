import { useState } from 'react'

const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState()

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {

        e.preventDefault()
        const value = inputValue.trim()
        if (value.length <= 1) return
        
        onNewCategory(value)
        setInputValue('')

    }

  return (
    <form onSubmit={ onSubmit}>
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={ onInputChange }
        />
    </form>
    
  )
}

export default AddCategory