![socketio](https://user-images.githubusercontent.com/21302583/68002297-3702d980-fc8e-11e9-895a-c551767159a8.png)
# Socket io


# Web-Socket in NodeJS
## What is a Web Socket?

Web Socket is a protocol which provides a full duplex(multiway) communication i.e allows communication in both directions simultaneously. It is a modern web technology in which there is a continuous connection between the user’s browser(client) and the server. In this type of communication, between the web server and the web browser, both of them can send messages to each other at any point in time. Traditionally in the web, we had a request/response format where a user sends an HTTP request and server responds to that. This is still applicable in most of the cases, especially those using RESTful API. But a need was felt for the server to also communicate with the client, without getting polled(or requested) by the client. The server in itself should be able to send information to the client or the browser. This is where Web Socket come into the picture.

In order to make use of the Socket in NodeJS, we first need to install a dependency that is socket.io. We can simply install it by running below command in cmd and then add this dependency to your server-side javascript file also install an express module which is basically required for server-side application

 `npm install socket.io --save`
 
 `npm install express --save`
