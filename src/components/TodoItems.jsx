import Items from './Items'
import style from './todocontainer.module.css'
import { TodoItemsContext } from '../store/todoItems-store'
import { useContext } from 'react'

function TodoItems() {
  const {todoitems}=useContext(TodoItemsContext)

  return (
    <>
    <div className={style.todocontainer}>
    {todoitems.map((item)=>(
        <Items 
        key={item.name}
        todoname={item.name} 
        tododate={item.date} 
        ></Items>
    ))}
    </div>
    </>
  )
}

export default TodoItems
