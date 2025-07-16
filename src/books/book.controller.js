import * as bookService from '../books/book.service.js';
import { sendResponse } from '../common/utils.common.js';

export const getAllBooks = (req, res) => {
  const books = bookService.getAllBooks();
  sendResponse(res, 200, true, 'Books fetched successfully', books);
};

export const getBookById = (req, res) => {
  const { id } = req.params;
  const book = bookService.getBookById(id);
  sendResponse(res, 200, true, 'Book fetched successfully', book);
};

export const createBook = async (req, res) => {
  try {
    const book = await bookService.createBook(req.body);
    sendResponse(res, 201, true, 'Book created successfully', book);
  } catch (error) {
    sendResponse(res, 500, false, 'Failed to create book', null);
  }
};

export const updateBook = (req, res) => {
  const { id } = req.params;
  const book = bookService.updateBook(id, req.body);
  if (!book) {
    sendResponse(res, 404, false, 'Book not found', null);
    return;
  }
  sendResponse(res, 200, true, 'Book updated successfully', book);
};

export const deleteBook = (req, res) => {
  const { id } = req.params;
  const deleted = bookService.deleteBook(id);
  if (!deleted) {
    sendResponse(res, 404, false, 'Book not found', null);
    return;
  }
  res.status(204).end();
};
