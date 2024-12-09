import { useState } from "react";

function BookSearch({ setSearchTerm }) {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  function handleSubmit(e) {
    console.log("The Form has been submitted!");
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
      <button type="submit">Search</button>
    </form>
  );
}

export default BookSearch;
