// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./views/Nav/Nav";
import Todo from "./views/Todo/Todo";

const App = () => {
  // STATE
  const [name, setName] = useState("");

  const [address, setAddress] = useState("");

  const [todos, setTodos] = useState([
    {
      id: "todo1",
      title: "Watching Youtube",
      type: "Yushinoda",
    },
    {
      id: "todo2",
      title: "doing homework",
      type: "Yua Mikami",
    },
    {
      id: "todo3",
      title: "Watch JAV",
      type: "Yushinoda",
    },
    {
      id: "todo4",
      title: "reading book",
      type: "Minamo",
    },
  ]);

  useEffect(() => {
    // console.log("run useEffect");
  }, []);

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
      type: "Yushinoda",
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleChangeValueInput = (event) => {
    setAddress(event.target.value);
  };

  const handleDeleteDataTodos = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h3>Hello world with {name}</h3>
        <Todo
          todos={todos}
          title={"All Todo"}
          handleDeleteDataTodos={handleDeleteDataTodos}
        />
        {/* <Todo
          todos={todos.filter((item) => item.type === "Yushinoda")}
          title={`Yushinoda todos`} a
        /> */}
        <input
          type="text"
          value={address}
          onChange={(event) => handleChangeValueInput(event)}
        />
        <br />
        <button type="button" onClick={() => handleSubmitButton()}>
          Add Todo
        </button>
      </header>
    </div>
  );
};

export default App;
