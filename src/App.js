// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./views/Nav/Nav";
import Todo from "./views/Todo/Todo";
import { Axios } from "axios";
import Covid from "./views/Covid/Covid";
import { CountDown, NewCountDown } from "./views/CountDown/CountDown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

  const onTimeUp = () => {
    // alert("time up");
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>
          <Route path="/todo">
            <Todo
              todos={todos}
              title={"All Todo"}
              handleDeleteDataTodos={handleDeleteDataTodos}
            />
            <input
              type="text"
              value={address}
              onChange={(event) => handleChangeValueInput(event)}
            />
            <br />
            <button type="button" onClick={() => handleSubmitButton()}>
              Add Todo
            </button>
          </Route>
          <Route path="/timer">
            <CountDown onTimeUp={onTimeUp} />
            <br />
            <NewCountDown onTimeUp={onTimeUp} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
