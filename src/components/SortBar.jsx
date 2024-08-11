
function SortBar({ sortBy, setSortBy }) {
    return (
      <div className="mb-4">
        <label className="mr-2">Sort by:</label>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)} 
          className="p-3 border rounded"
        >
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </div>
    );
  }
  
  export default SortBar;
  