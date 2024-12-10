import BookCard from "./BookCard";
import { useState, useEffect } from "react";
import axios from "axios";

function BookList({ searchTerm }) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  function getBooks() {
    setIsLoading(true);
    return axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then(({ data }) => {
        setIsLoading(false);
        setBooks(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
      });
  }

  getBooks();

  //   useEffect(() => {
  //     setIsLoading(true);
  // fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
  // .then((response) => {
  // return response.json();
  // })
  // .then(({items}) => {
  //   setIsLoading(false);
  // setBooks(items)
  // })
  // .catch((err) => {
  //   setIsLoading(false)
  //   setError(true)
  // })
  //   }, [searchTerm]);

  return (
    <div className="border border-success">
      <h2>Book List:</h2>
      {isLoading ? (
        <p>Your Books are Loading...</p>
      ) : error ? (
        <p>Oh No! Error!!!</p>
      ) : (
        <ul>
          {books.map((book) => {
            return <BookCard book={book} key={book.id} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default BookList;
