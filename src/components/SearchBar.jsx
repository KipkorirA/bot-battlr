
function SearchBar({ searchQuery, setSearchQuery}) {
  return (
    <input
      type="text"
      placeholder="Search bots..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="mb-2 mt-2 p-3 m-5 border rounded"
    />
  );
}

export default SearchBar;
