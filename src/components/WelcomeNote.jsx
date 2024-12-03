import React, { useContext } from 'react'
import { TodoItemsContext } from '../store/todoItems-store'


function WelcomeNote() {

  const {todoitems} = useContext(TodoItemsContext);


  return (
    
    todoitems.length ===0 && <h2>Enjoy Yor Day!</h2>
  )
}

export default WelcomeNote
