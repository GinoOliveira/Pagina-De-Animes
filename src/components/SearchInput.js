import React, { useState } from 'react'
import useDebounced from './useDebounce';
const SearchInput = ({ value, onChange})=>{
    const [displayValue, setDisplayValue] = useState(value)
    const debouncedChange = useDebounced(onChange, 500);

    const handleChange = (event) =>{
        setDisplayValue(event.target.value)
        debouncedChange(event.target.value)
    }

    
    return(
        <input className='nav-input' type="search" value={displayValue} onChange={handleChange} placeholder="Buscador..." />
    )
}
export default SearchInput