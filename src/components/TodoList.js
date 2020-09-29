import React from "react";
import Todo from "./Todo"

const TodoList = ({todos, setTodos, filterTodos}) => {
    // console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
          {filterTodos.map((todo) => (
              <Todo 
              setTodos={setTodos}
              todos={todos} 
              todo={todo}
              key={todo.id} 
              text={todo.text}/>
          ))}
      </ul>
    </div>
  );
};

export default TodoList