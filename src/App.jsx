import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import BookSearch from "./components/BookSearch";
import BookList from "./components/BookList";

function App() {
  const [searchTerm, setSearchTerm] = useState("Cats");

  return (
    <>
      <Header searchTerm={searchTerm} />
      <BookSearch setSearchTerm={setSearchTerm} />
      <BookList searchTerm={searchTerm} />
    </>
  );
}

export default App;
