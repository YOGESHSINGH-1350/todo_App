import { useRef} from 'react';
import style from './AddItems.module.css'
import { TodoItemsContext } from '../store/todoItems-store';
import { useContext } from 'react';
import { useState } from 'react';

function AddItems() {

const {addNewItem} = useContext(TodoItemsContext);

// const[newItems,setNewItem]=useState("")
// const[newDate,setNewDate]=useState("")

const todoItemsElement=useRef()
const dueDateElement=useRef()


const [formattedDate, setFormattedDate] = useState("");


const handleDateChange = () => {
  const selectedDate = dueDateElement.current.value; // Get the date (yyyy-mm-dd)
  const [year, month, day] = selectedDate.split("-"); // Split into parts
  const newFormat = `${day}.${month}.${year}`; // Reformat to dd-mm-yyyy
  setFormattedDate(newFormat); // Update state
};

  const handleAddButtonclicked=()=>{
    const todoItem=todoItemsElement.current.value
    if (todoItem && formattedDate) {
      addNewItem(todoItem, formattedDate); // Pass item and reformatted date
      // Clear input fields
      todoItemsElement.current.value = "";
      dueDateElement.current.value = "";
      setFormattedDate(""); // Reset state
    } else {
      alert("Please add an item and select a valid date!");
    }
   
  }

  

  return (
   <>
   <div className="container" id={style.additems}>  
  <div className="row">
    <div className="col-4"><input datatype='text' placeholder='Add Items' ref={todoItemsElement}
    ></input>
    </div>
    <div className="col-4"><input type='date'  ref={dueDateElement} onChange={handleDateChange}
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
