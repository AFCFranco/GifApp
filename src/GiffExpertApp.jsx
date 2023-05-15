import { useState } from 'react'
import { AddCategory,GifGrid } from './components'


export const GiffExpertApp = () => {
    const [categories, setCategories] = useState([])
    const onAddCategory = (category) => {
        if (category.length > 1 && !categories.includes(category)) {
            setCategories([category,...categories ])
        }else{
            alert('categoria invalida ')
        }
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategory={onAddCategory} />
                { //esta llave esta por que voy a ingresar codigo dentro del html
                    categories.map(
                        (category) => (
                           <GifGrid key={category} category={category}/>
                        )  //notese que aca es ( y no  {
                    )
                }
        </>
    )
}