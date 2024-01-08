import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export interface Book {
  _id: string;
  title: string;
  author: string;
  editorial: string;
  status: string;
}

interface BooksProps {
  books: Book[];
  onDelete: (id: string) => void;
  onUpdate: (book: Book) => void;
  onViewDetails: (book: Book) => void;
}

const Books: React.FC<BooksProps> = ({ books, onDelete, onUpdate, onViewDetails  }) => {
  return (
    <div>
      <h3 className="mt-4 mb-4">Book List</h3>
      <ul className="list-group">
        {books.map((book) => (
          <li key={book._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <span className="mr-2">{book.title}</span>
            </div>
            <div>
              <button
                  className="btn btn-info btn-sm mr-2"
                  onClick={() => onViewDetails(book)}
                >
                  <FontAwesomeIcon icon={faInfoCircle} /> Details
              </button>
              <button className="btn btn-danger btn-sm mr-2" onClick={() => onDelete(book._id)}>Delete</button>
              <button className="btn btn-primary btn-sm" onClick={() => onUpdate(book)}>Update</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
