import React from 'react'
import Todos from './Todos'
import {useDispatch} from 'react-redux'
import {addTodo, delAll} from '../features/todolist/todoSlicer'

function AddTodo() {
    const dispatch = useDispatch()
    const [todo, setTodo] = React.useState('')

    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setTodo(e.target.value)
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        e.target.parentElement.firstChild.value = ''
        dispatch(addTodo(todo))
    }
    const handleDel = (e) => {
        e.preventDefault()
        dispatch(delAll())
    }

    return (
        <div>
             <div>
                <input type="text" onChange={handleChange} />
                <button onClick={handlesubmit}>Add</button>
                <button onClick={handleDel}>Delete All</button>
                <Todos/>
            </div>
        </div>
    )
}

export default AddTodo
