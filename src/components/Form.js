import React from "react";

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {

    // JS Code
    const inputTextHandler = (e) =>{
        // console.log(e.target.value);
        setInputText(e.target.value)
    }

    const submitToDoHandler = (e) =>{
        e.preventDefault();
        console.log(e.target.value);
        console.log(inputText);
        if(inputText === ""){
          alert("Please Enter Todo");
          return false;
        }
        setTodos([
            ...todos,
            {text: inputText, completed: false, id:Math.random() * 1000}
        ]);
        setInputText("")
    }

    const statusHandler = (e) => {
      // console.log(e.target.value);
      setStatus(e.target.value)
    }

  return (
    <form>
      <input 
      value = {inputText}
      onChange={inputTextHandler}
       type="text" 
       className="todo-input" />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div onChange={statusHandler} className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Incomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form
