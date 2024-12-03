import { createContext } from "react";
import { useReducer } from "react";



 export const TodoItemsContext = createContext(
    {todoitems:[],
        addNewItem:()=>{},
        deletedItem:()=>{}}
      
 );


 const todoitemsReducer=(currItems,action)=>{

    let newtodoitems=currItems
  if(action.type==="ADD_ITEM"){  
    newtodoitems=[...currItems,
      {name:action.payload.itemname,date:action.payload.itemdate}];
        
  }
  else if(action.type==="DELETE_ITEM") {
    newtodoitems=currItems.filter((item)=>item.name != action.payload.itemname)
  }
  
  return newtodoitems;
  }


  
 const TodoItemsContextProvider=({children})=>{

    const[todoitems,dispatchedTodoitems]=useReducer(todoitemsReducer,[])

  
    const addNewItem=(itemname,itemdate)=>{
      const addNewItemAction={
        type:"ADD_ITEM",
        payload:{
          itemname,
          itemdate
          }
        }
      dispatchedTodoitems(addNewItemAction)    
     }
    
  
    const deletedItem=(itemname)=>{
    const deletedItemAction={
      type:"DELETE_ITEM",
      payload:{
        itemname,
      }
    }
    dispatchedTodoitems(deletedItemAction)    
    }
  
  
    return (
        
       
        <TodoItemsContext.Provider value={
          {todoitems,
          addNewItem,
          deletedItem}
        }>
            {children}
        </TodoItemsContext.Provider>
    )    

 }
 export default TodoItemsContextProvider;