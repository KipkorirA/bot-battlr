import { useState, useEffect } from 'react';

function FetchData({onSelectBot}) {
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

  return (
    <div className="p-10 max-w-2xl max-h-full bg-white">
      <h1 className="text-2xl text-black font-bold mb-4">Fetched Data:</h1>
      <ul className="space-y-4">
      {data.map((bot) => (
          <li key={bot.id} className="border rounded-lg p-4 shadow-md">
            <div >
              <h2 className="text-xl text-black font-semibold mb-2">{bot.name}</h2>
              <p className="text-gray-700">Health: <span className="font-medium"></span>{bot.health}</p>
              <p className="text-gray-700">Damage: <span className="font-medium"></span>{bot.damage}</p>
              <p className="text-gray-700">Armor: <span className="font-medium"></span>{bot.armor}</p>
              <button 
                className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
                onClick={() => onSelectBot(bot)}>
                Enlist
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
