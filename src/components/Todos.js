import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {delTodo, editTodo, fetchposts} from '../features/todolist/todoSlicer'
import styles from './Todo.module.css'

function Todos() {
    const state = useSelector(state => state.todo.todos)
    const statepost = useSelector(state => state.todo.posts)
console.log(state)
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
            {
                statepost.map((item) => {
                 return (
                    <div>
                        <li key={item.id}>{item.title}</li>
                        <p>{item.body}</p>
                    </div>
                 )
                })
            }
            <button className={styles.asyncButton} onClick={() => dispatch(fetchposts())}>click</button>
        </div>
    )
}

export default Todos