import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
    <form onSubmit={handleSubmit}>
      <label id="search-label">
        Search Book Library:
        <input type="text" onChange={handleChange} value={searchInput} id="input" placeholder="type in key word"/>
      </label>
      <Button variant="light" type="submit" id="search-button"><span className="button-text">Search</span></Button>
    </form>
  );
}

export default BookSearch;
