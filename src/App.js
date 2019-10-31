import React from 'react';
import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:6600");

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: ""
    }
    let _this = this;
    socket.on("data", function (d) {
      _this.setState({
        data: d
      })
    })
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>{data}</h1>
      </div>
    )
  }
}


export default App;
