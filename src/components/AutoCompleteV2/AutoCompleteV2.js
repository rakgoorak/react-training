import React, { useEffect, useState } from 'react'

function AutoCompleteV2({ options }) {
    const [value, setValue] = useState("")
    const [show, setShow] = useState(false)
    const [filter, setFilter] = useState(options);

    useEffect(() => {
        setFilter(options.filter(option =>
            option.toLowerCase().includes(value.toLocaleLowerCase())
        ))
    }, [value, options])

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = (e) => {
        setValue(e)
        setShow(false)
    }

    return (
        <div>
            <input
                value={value}
                onChange={handleChange}
                placeholder='Search'
                onFocus={() => setShow(true)}
            />
            {show && (
                <ul>
                    {filter.map(item => (
                        <li key={item} onClick={() => handleClick(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default AutoCompleteV2