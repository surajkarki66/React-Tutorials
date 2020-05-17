import React, {useState} from 'react';


import classes from './App.module.css';

function Todo(props) {   // component
  return (
    <div
      className={classes.todo}
      style={{ textDecoration: props.todo.isCompleted ? "line-through" : "" }}
    >
      {props.todo.text}

      <div>
        <button onClick={() => props.completeTodo(props.index)}>Complete</button>
        <button onClick={() => props.removeTodo(props.index)}>x</button>
      </div>
    </div>
  );
} 

function TodoForm({addTodo}) {          // component
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}


function App() {
    const [todos, setTodos] = useState([
      {
        text: "Learn about React",
        isCompleted: false
      },
      {
        text: "Meet friend for lunch",
        isCompleted: false
      },
      {
        text: "Build really cool todo app",
        isCompleted: false
      }
    ]);
    

    const addTodo = text => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };
      
    const completeTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    };

    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1)
      setTodos(newTodos);
    }
   
    return (
        <div className={classes.app}>
          <h1 style={{textAlign: 'center'}}>TODO APP</h1>
          <div className={classes.todolist}>
            {todos.map((todo, index) => (
              <Todo
                key={index}// default react 
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
            <TodoForm addTodo={addTodo} />
          </div>
        </div>
      );
}


export default App;