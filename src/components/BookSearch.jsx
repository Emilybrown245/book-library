import { useState } from "react";
import Button from 'react-bootstrap/Button';


function BookSearch({ setSearchTerm }) {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  function handleSubmit(e) {

    e.preventDefault();
    setSearchTerm(searchInput);
    setSearchInput("");
  }

  return (
    <form className="border border-warning" onSubmit={handleSubmit}>
      <label>
        Enter search term:
        <input type="text" onChange={handleChange} value={searchInput} />
      </label>
      <Button variant="outline-info" type="submit">Search</Button>
    </form>
  );
}

export default BookSearch;
