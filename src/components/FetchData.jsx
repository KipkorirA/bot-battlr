import { useState, useEffect } from 'react';

function FetchData({onSelectBot, selectedBots, searchQuery, sortBy, onViewBot}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const url = 'https://bot-deploy-link.vercel.app/bots';

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); 

  if (loading) return <div className="text-center text-gray-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error.message}</div>;

  const filteredData = data 
  .filter(bot =>bot.name.toLowerCase().includes(searchQuery.toLowerCase()))
  .sort((a, b) => b[sortBy] - a[sortBy])

  return (
    <div className="p-1  max-h-full bg-yellow-100 ">
      <h1 className="text-2xl text-yellow-200 font-bold mb-4 text-center bg-black">Fetched Data:</h1>
      {filteredData.length === 0 ? (
        <p className="text-center text-gray-600">No results found.</p>
      ):(
      <ul className="flex flex-wrap space-y-4 space-x-4">
      {filteredData.map((bot) => {
        const isSelected = selectedBots.some(selectedBot => selectedBot.id === bot.id);
          return(

          <li key={bot.id} className="border rounded-lg p-4 shadow-md">
            
              <h2 className="text-xl text-black font-semibold mb-2">{bot.name}</h2>
              <img src={bot.avatar_url} alt={bot.name} className="w-24 h-24 mb-2" />
              <button 
                className={`mt-2 py-1 px-4 rounded ${isSelected ? 'bg-gray-500' : 'bg-blue-500'} text-white`}
                onClick={() => onSelectBot(bot)}
                disabled={isSelected}>
                 {isSelected ? 'Enlisted' : 'Enlist'}
              </button>
              <button 
                onClick={() => onViewBot(bot)}
                className="py-1 px-4 rounded bg-green-500 text-white"
              >
                View
              </button>
            
          </li>
      );
        })}
      </ul>
      )}
    </div>
  );
}

export default FetchData;
