import React from 'react'

const Todo = ({ todoList, deleteTodo }) => {
  return (
    <div>
      {todoList.map((curentvalue, index) => (
        <div>
          {curentvalue}
          <button onClick={()=>{deleteTodo(index)}}>削除</button>
        </div>
      ))}
    </div>
  )
}

export default Todo