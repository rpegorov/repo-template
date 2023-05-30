import {IBook} from "../interfaces/IBook.js";
import {AppDataSource} from "../connections/MongoConnection";
import {Book} from "../entities/Book.js";
import {InsertResult} from "typeorm";

export default class BookRepository {
    static getBooks = async (): Promise<Array<IBook>> => AppDataSource.getRepository(Book).find();
    static addBooks = async (book: IBook): Promise<InsertResult> => AppDataSource.getRepository(Book).insert(book);
}



