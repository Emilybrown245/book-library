function Header({ searchTerm }) {
  return (
    <div className="border border-danger">
      <h1>Book Library</h1>
      <p>Viewing books on {searchTerm}</p>
    </div>
  );
}

export default Header;
