import BookCard from "./BookCard";
import { useState } from "react";

function BookList({ searchTerm }) {
  const [books, setBooks] = useState([]);

  return (
    <div className="border border-success">
      <h2>Book List:</h2>
      <ul>
        <BookCard />
        <BookCard />
        <BookCard />
      </ul>
    </div>
  );
}

export default BookList;
