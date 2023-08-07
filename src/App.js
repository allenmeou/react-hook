// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Nav from "./views/Nav";

const App = () => {
  // STATE
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      title: "Watching Youtube",
    },
    {
      id: "todo2",
      title: "doing homework",
    },
    {
      id: "todo3",
      title: "Watch JAV",
    },
  ]);

  // EVENT
  const handleSubmitButton = () => {
    // hook not merge state
    if (!address) {
      alert("empty input");
      return;
    }
    let newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: address,
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };
  const handleChangeValueInput = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h3>Hello world with {name}</h3>
        <div className="todo-container">
          {todos.map((item, index) => {
            return (
              <li key={item.id}>
                {item.id} - {item.title}
              </li>
            );
          })}
        </div>
        <input
          type="text"
          value={address}
          onChange={(event) => handleChangeValueInput(event)}
        />{" "}
        <br />
        <button type="button" onClick={() => handleSubmitButton()}>
          Add Todo
        </button>
      </header>
    </div>
  );
};

export default App;
