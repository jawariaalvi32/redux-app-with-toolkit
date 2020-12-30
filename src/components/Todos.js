import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {delTodo, editTodo} from '../features/todolist/todoSlicer'
import styles from './Todo.module.css'

function Todos() {
    const state = useSelector(state => state.todo)
    const dispatch = useDispatch()
    const handleDel = (id) => {
        dispatch(delTodo(id,state))
    }
    const handleEdit = (id) => {
        let title = prompt("Enter title");
        let newTodo = {id:id, text: title}
        console.log(newTodo)
        dispatch(editTodo(newTodo))
    }
    return (
        <div>
            {
                state.map((item) => {
                    console.log(item)
                 return (
                    <div className={styles.flex}>
                        <li key={item.id}>{item.text}</li>
                        <button className={styles.button} onClick={() => handleDel(item.id)}>Delete</button>
                        <button className={styles.button} onClick={() => handleEdit(item.id)}>Edit</button>
                    </div>
                 )
                })
            }
        </div>
    )
}

export default Todos