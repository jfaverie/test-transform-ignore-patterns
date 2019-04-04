import React, { Component, ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Checkbox } from "@material-ui/core/es";

class App extends Component {
  public readonly state = {
    checked: false
  };
  private toggleRadio = (
    e: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    this.setState({ checked }, () => console.log({ checked }));
  };
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Checkbox checked={this.state.checked} onChange={this.toggleRadio} />
        </header>
      </div>
    );
  }
}

export default App;
