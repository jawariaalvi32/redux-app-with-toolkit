import { createSlice } from '@reduxjs/toolkit'

export const todoSlicer = createSlice({
    name: 'todolist',
    initialState: [
        {
            id: 1,
            text : 'Hey',
        }
    ],
    reducers: {
        addTodo(state, action) {
            // const { id, text } = action.payload
            // return [...state,{ id : Math.random(0,9), 
            //     text : action.payload,
            //     completed: false}]
            state.push({ 
                id : Math.random(0,9), 
                text : action.payload,
                completed: false
            })
        },
        delAll(state){
            state.length = 0
        },
        delTodo(state, action){
            let newTodo = state.filter((item) => 
                item.id !== action.payload
            )
            return newTodo
        },
        // editTodo(state, action){
        //     console.log(typeof parseInt(action.id))
        //     console.log(action.payload.text)
        //     let updatedTodo = state.find((item) =>{
        //         (item.id == parseInt(action.payload.id)) 
        //         item.text = action.payload.text 
        //     }
                
        //     )
        //     console.log(updatedTodo)
        //     return updatedTodo
        // }

    }
})

export const {addTodo, delAll, delTodo, editTodo} = todoSlicer.actions;
export default todoSlicer.reducer