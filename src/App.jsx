import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import BookSearch from "./components/BookSearch";
import BookList from "./components/BookList";
import Collapsible from "./components/Collapsible";

function App() {
  const [searchTerm, setSearchTerm] = useState("Cats");

  return (
    <div className="app">
      <Header searchTerm={searchTerm} />
      <Collapsible contentDescriptor={"search"}>
        <BookSearch setSearchTerm={setSearchTerm} />
      </Collapsible>
      <Collapsible contentDescriptor="books">
        <BookList searchTerm={searchTerm} />
      </Collapsible>
    </div>
  );
}

export default App;
