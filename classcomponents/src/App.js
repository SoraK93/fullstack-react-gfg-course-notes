import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Welcome extends Component {
  render() {
    console.log(this);

    return (
      <h1>
        Hello {this.props.name ?? this.state.name}, Welcome to {this.props.firm}
        !!!
      </h1>
    );
  }
}

class App extends Component {
  state = {
    name: "Sourabh",
    count: 0,
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  /** Lifecycle Methods
   * Mount --> Update --> Unmount
   * 
   */
  componentDidMount(){
    fetch("");
  };

  shouldComponentUpdate(nextProps, state){};

  componentDidUpdate(){};

  componentWillUnmount(){};

  componentDidCatch(error, info ){};

  render() {
    return (
      <>
        <Welcome name={this.state.name} firm="GFG" />
        <div>
          <input
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter something here..."
          />
        </div>
        <div>
          <button onClick={this.handleClick}>
            Clicked - {this.state.count} times
          </button>
        </div>
        <p>Hi, {this.state.name}</p>
      </>
    );
  }
}

class App1 extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
