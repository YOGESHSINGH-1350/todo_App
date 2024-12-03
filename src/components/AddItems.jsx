import { useRef} from 'react';
import style from './AddItems.module.css'
import { TodoItemsContext } from '../store/todoItems-store';
import { useContext } from 'react';

function AddItems() {

const {addNewItem} = useContext(TodoItemsContext);

// const[newItems,setNewItem]=useState("")
// const[newDate,setNewDate]=useState("")

const todoItemsElement=useRef()
const dueDateElement=useRef()


  const handleAddButtonclicked=()=>{
    const todoItems=todoItemsElement.current.value
    const durDate=dueDateElement.current.value
    addNewItem(todoItems,durDate)
    todoItemsElement.current.value=""
    dueDateElement.current.value=""   
   
  }

  return (
   <>
   <div className="container" id={style.additems}>  
  <div className="row">
    <div className="col-4"><input datatype='text' placeholder='Add Items' ref={todoItemsElement}
    ></input>
    </div>
    <div className="col-4"><input type='date'  ref={dueDateElement}
    ></input>
    </div>
    <div className="col-2"><button type="button" className="btn btn-success" 
    onClick={handleAddButtonclicked}>Add</button>
    </div>
  </div>
</div>
   </>
  )
}

export default AddItems
