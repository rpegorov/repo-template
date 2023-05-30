import {IBook} from "../interfaces/IBook.js";
import BookRepository from "../repositories/BookRepository.js";
import {InsertResult} from "typeorm";

export class BookService {
    static getBooks = async (): Promise<Array<IBook>> => BookRepository.getBooks();
    static addBooks = async (book: IBook): Promise<InsertResult> => BookRepository.addBooks(book);
}