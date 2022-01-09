import React, {useState} from 'react'
import TodoFormInput from './TodoFormInput'
import { RiCloseCircleLine} from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { GrCheckbox } from 'react-icons/gr'



function Todo({todos, removeTodo, completeTodo, updateTodo}) {
    const [edit, setEdit] = useState(
        {
            id: null,
            value: ''
        }
    )

    const submitUpdate = value => {
        updateTodo(edit.id, value, completeTodo)
        setEdit({
            id: null,
            value: ''
        })
    }

    if ( edit.id) {
        return <TodoFormInput edit={edit} onSubmit={submitUpdate} />
    }




    return todos.map((todo, index) =>(
        <div key={index} className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
            <div key={todo.id}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                    onClick={() =>removeTodo(todo.id)}
                    className='delete-icon'
                />
                <TiEdit 
                    onClick={() => setEdit( {id: todo.id, value: todo.text})}
                    className='edit-icon'
                />
                <GrCheckbox 
                    onClick={() => completeTodo(todo.id)}
                />
                
            </div>
        </div>)
    )
}

export default Todo
