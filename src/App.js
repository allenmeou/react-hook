// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Nav from "./views/Nav";

const App = () => {
  // STATE
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  // EVENT
  const handleSubmitButton = () => {
    setName(address);
  };
  const handleChangeValueInput = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h3>Hello world with {name}</h3>
        <input
          type="text"
          value={address}
          onChange={(event) => handleChangeValueInput(event)}
        />{" "}
        <br />
        <button type="button" onClick={() => handleSubmitButton()}>
          CLick Me!
        </button>
        <button></button>
      </header>
    </div>
  );
};

export default App;
