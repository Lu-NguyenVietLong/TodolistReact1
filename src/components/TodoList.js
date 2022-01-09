import React, {useState} from 'react'
import TodoFormInput from './TodoFormInput'
import Todo from './Todo'

function TodoList() {

    const [todos, setTodos] = useState([])


    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplet
            }
            return todo 
        })
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1>Trello Fake</h1>
            <TodoFormInput onSubmit={addTodo}/>
            <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} completeTodo={completeTodo} />
        </div>
    )
}

export default TodoList
