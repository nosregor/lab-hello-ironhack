import React from "react";
import Header from "./Header";
import Content from "./Content";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
