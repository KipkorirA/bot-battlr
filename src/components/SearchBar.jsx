
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search bots..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="mb-4 p-2 border rounded"
    />
  );
}

export default SearchBar;
