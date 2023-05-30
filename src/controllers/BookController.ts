import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import {IBook} from "../interfaces/IBook.js";
import {BookService} from "../services/BookService.js";
import {IBookPostBody} from "../interfaces/IBookPostBody.js";
import {v4 as uuid4} from "uuid";

export default class BookController {
    static registerRoutes(fastify: FastifyInstance, options: any, done: any) {
        fastify.get('/books', BookController.getBooks);
        fastify.post('/books', BookController.addBook);
        done();
    }
    static async getBooks(req: FastifyRequest, res: FastifyReply): Promise<void> {
        try {
            const books: Array<IBook> = await BookService.getBooks();
            res.code(200).send(books);
        } catch {
            res.code(404).send({ message: 'Not found' });
        }
    }

    static async addBook(
        req: FastifyRequest<{ Body: IBookPostBody }>,
        res: FastifyReply,
    ): Promise<void> {
        const {author, title, description} = req.body;
        const book: IBook = {
            id: uuid4(),
            author,
            title,
            description
        };

        try {
            await BookService.addBooks(book);
            res.code(201).send(book);
        } catch {
            res.code(400).send({ error: 'Bad Request' });
        }
    }
}