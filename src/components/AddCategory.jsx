import { useState } from "react"

export const AddCategory = ({setCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value);
        //console.log(event.target.value);
    }
    const onSubmit=(event)=>{      
        event.preventDefault();
        setCategory(inputValue)
        setInputValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <div>AddCategory</div>
            <input
                type='text'
                placeholder="Add Category"
                onChange={onInputChange}
                value={inputValue}
            />
        </form>

    )
}