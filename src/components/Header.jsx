function Header({ searchTerm }) {
  return (
    <div className="header">
      <h1>Book Library</h1>
      <p>Viewing books on {searchTerm}</p>
    </div>
  );
}

export default Header;
