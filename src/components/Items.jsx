import style from './items.module.css'
import { TodoItemsContext } from '../store/todoItems-store';
import { useContext } from 'react';
function Items({todoname,tododate}) {
  const {deletedItem} = useContext(TodoItemsContext);
  return (
    <div className="container text-center" id={style.items}>
    <div className="row">        
      <div className="col-4">{todoname}</div>
      <div className="col-4">{tododate}</div>
      <div className="col-2"><button type="button" className="btn btn-danger" 
      onClick={()=>{deletedItem(todoname)}}>Delete</button>
      </div>
    </div>
  </div>
  )
}

export default Items
