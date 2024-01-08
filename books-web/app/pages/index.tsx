'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Books, { Book } from '../components/Books';
import BookForm from '../components/BookForm';
import NewBookForm from '../components/NewBookForm';

const BooksHome: React.FC = () => {
  const API_BOOKS_URL = 'http://localhost:3001/books';
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isViewOnly, setIsViewOnly] = useState<boolean>(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get<Book[]>(API_BOOKS_URL);
      setBooks(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching books:', error);
      setError('Error fetching books. Please try again.');
    }
  };

  const handleCreate = async (values: any) => {
    try {
      await axios.post(API_BOOKS_URL, values);
      fetchBooks();
      setError(null);
    } catch (error) {
      console.error('Error creating book:', error);
      setError('Error creating book. Please try again.');
    }
  };

  const handleUpdate = async (values: any) => {
    try {
      await axios.put(`${API_BOOKS_URL}/${values._id}`, values);
      setSelectedBook(null);
      fetchBooks();
      setIsViewOnly(false);
      setError(null);
    } catch (error) {
      console.error('Error updating book:', error);
      setError('Error updating book. Please try again.');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API_BOOKS_URL}/${id}`);
      fetchBooks();
      setError(null);
    } catch (error) {
      console.error('Error deleting book:', error);
      setError('Error deleting book. Please try again.');
    }
  };

  const handleViewDetails = (book: Book) => {
    console.log('seleccionado Details', book);
    // TODO. It should update the info inside the Form
    setSelectedBook(book);
    setIsViewOnly(true);
  };

  const handleSelectBook = (book: Book) => {
    console.log('seleccionado', book)
    // TODO. It should update the info inside the Form
    setSelectedBook(book);
    setIsViewOnly(false);
  };

  return (
    <div className="container mt-5 mb-5">
      <h1 className="mb-4 text-center">Books CRUD</h1>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <h3 className="mt-4">Create Book</h3>
      <NewBookForm onSubmit={handleCreate} />

      <Books
        books={books}
        onDelete={handleDelete}
        onUpdate={handleSelectBook}
        onViewDetails={handleViewDetails}
      />

      {selectedBook && (
        <div>
          <h3 className="mt-4">{isViewOnly ? 'Book Details' : 'Edit Book'}</h3>
          <BookForm
            onSubmit={handleUpdate}
            initialValues={selectedBook}
            isViewOnly={isViewOnly}
          />
        </div>
      )}

    </div>
  );
};

export default BooksHome;
