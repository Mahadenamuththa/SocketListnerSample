let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);

class Server {
    constructor(port, app) {
        this.app = app;
        this.port = port;
    }
    get() {
        app.get("/", function (req, res) {
            res.sendFile(__dirname + "/index.html");
            res.end();
        });
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
