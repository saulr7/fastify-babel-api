
import Fastify from "fastify";

class App {

    constructor() {
        this.app = Fastify({ logger: true })
        this.routes()
    }

    routes() {
        this.app.get("/ping", (req, res) => {
            res.send({ok : true, msg : "pong"})
        })
        this.app.get("/", async (req, res) => {
            return {ok : true, msg : "/"}
        })
    }

    run() {
        console.log("runnnig again 2");
    }
}

export  default  App  