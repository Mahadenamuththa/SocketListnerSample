![socketio](https://user-images.githubusercontent.com/21302583/68002297-3702d980-fc8e-11e9-895a-c551767159a8.png)
# Socket io
[![Build status](https://ci.appveyor.com/api/projects/status/d2n1sbvd3bvhgfct/branch/master?svg=true)](https://ci.appveyor.com/project/Mahadenamuththa/socketlistnersample/branch/master)

[![Build history](https://buildstats.info/appveyor/chart/Mahadenamuththa/socketlistnersample)](https://ci.appveyor.com/project/Mahadenamuththa/socketlistnersample/history)

# Web-Socket in NodeJS
## What is a Web Socket?

Web Socket is a protocol which provides a full duplex(multiway) communication i.e allows communication in both directions simultaneously. It is a modern web technology in which there is a continuous connection between the user’s browser(client) and the server. In this type of communication, between the web server and the web browser, both of them can send messages to each other at any point in time. Traditionally in the web, we had a request/response format where a user sends an HTTP request and server responds to that. This is still applicable in most of the cases, especially those using RESTful API. But a need was felt for the server to also communicate with the client, without getting polled(or requested) by the client. The server in itself should be able to send information to the client or the browser. This is where Web Socket come into the picture.

In order to make use of the Socket in NodeJS, we first need to install a dependency that is socket.io. We can simply install it by running below command in cmd and then add this dependency to your server-side javascript file also install an express module which is basically required for server-side application

## Create React Project
You’ll need to have leatest Node version on your local development machine,Make sure to download Node Js from https://nodejs.org/en/download/ (Take always LTS version) and install.

01. To create a new app, you may choose one of the following methods:

    `npm create-react-app yourappname` (Keep remember your name should be all simple letters)

02. `cd yourappname` to go project location

03. `npm start` to start React Project

## Install Socket io and create server

01. install socket.io,socket.io-client and express.

      `npm install express --save`

      `npm install socket.io --save`

      `npm install socket.io-client --save`
  
  02. Create Folder in src 'Server'.
  
  03. Create Index.js in Server Folder.
  
      ```
      my-app
      ├── README.md
      ├── node_modules
      ├── package.json
      ├── .gitignore
      ├── public
      └── src
          ├── Server
          |   └── Index.js
          ├── App.css
          ├── App.js
          ├── App.test.js
          ├── index.css
          ├── index.js
          ├── logo.svg
          └── serviceWorker.js
      ```
 04. inside index.js in server add like this
 
 ``` javascript
    let app = require("express")();
    let http = require("http").Server(app);
    let io = require("socket.io")(http);

    class Server {
        constructor(port, app) {
            this.app = app;
            this.port = port;
        }
        get() {
            try {
                app.get("/", function (req, res) {
                    res.sendFile(__dirname + "/index.html");
                    res.end();
                });
            }
            catch (error) {
                console.log(error)
            }
        }
        openConnection() {
            io.on("connect", function (socketa) {
                socketa.emit("data", "I'm from socket")
            });

        }
        listener() {
            let port = this.port;
            http.listen(port, function (socket) {
                console.log(`listening on *:${port}`);
            });
        }
    }

    const newServer = new Server(6600, app);
    newServer.get();
    newServer.openConnection();
    newServer.listener();

 ```

05. Change App.js Like this

 ``` javascript
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

 ```
