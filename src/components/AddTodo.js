import React from 'react'
import Todos from './Todos'
import {useDispatch} from 'react-redux'
import {addTodo, delAll} from '../features/todolist/todoSlicer'
import styles from './Todo.module.css'
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
            <h3 className={styles.value}>TODO LIST</h3>
             <div>
                <input type="text" className={styles.textbox} onChange={handleChange} />
                <button className={`${styles.button} ${styles.btnLg}`} onClick={handlesubmit}>Add</button>
                <button className={`${styles.button} ${styles.btnLg}`} onClick={handleDel}>Delete All</button>
                <Todos/>
            </div>
        </div>
    )
}

export default AddTodo
