import App from "./app";

class Server {

    constructor(port) {
        this.PORT = port
        this.app = new App().app
    }

    serve() {
        this.app.listen(this.PORT, (err, add) => {
            if (err) {
                console.log("something went wrong");
                return
            }
            console.log("runnning at ", add);
        })
    }

}

export default Server