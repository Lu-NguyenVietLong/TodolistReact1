import React, {useState, useEffect, useRef} from 'react'




function TodoFormInput(props) {
    const [input, setInput] = useState('')
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('')
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type='text'
                className='todo-input'
                value={input}
                name='text'
                onChange={handleChange}
                ref={inputRef}
                />
                <button className="todo-btn">Thêm</button>
            </form>
        </div>
    )
}

export default TodoFormInput
