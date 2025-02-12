import fastify from "fastify"
import BookController from "./controllers/BookController.js"

const server = fastify({logger: true})
server.register(BookController.registerRoutes)

server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Started server at ${address}`);
});
