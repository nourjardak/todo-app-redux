import React from 'react'
import { useSelector } from 'react-redux'
import TaskAdded from './TaskAdded'

const Todolist = () => {
    const listTodo = useSelector(state => state.todoReducer.listTodo)
    return (
        <div>
            {listTodo.map(item=><TaskAdded key={item.id} item={item} />)}
        </div>
    )
}

export default Todolist
