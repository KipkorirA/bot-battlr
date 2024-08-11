import { useState } from 'react';
import FetchData from './FetchData';

function BotSpecs({ bot, onEnlist, onBack }) {
  const [enlisting, setEnlisting] = useState(false);

  const handleEnlist = () => {
    setEnlisting(true);
    onEnlist(bot);
  };

  return (
    <div className="p-4 m-10 border flex w-80 flex-row rounded-lg shadow-md bg-yellow-100">
      <img src={bot.avatar_url} alt={bot.name} className="w-48 h-48 mb-4" />
      <div>
      <h2 className="text-3xl font-bold mb-4">{bot.name}</h2>
      <p className="text-gray-700">Health: {bot.health}</p>
      <p className="text-gray-700">Damage: {bot.damage}</p>
      <p className="text-gray-700">Armor: {bot.armor}</p>
      <div className='space-x-1'>
      <button onClick={onBack} className="mb-4 py-1 px-4 rounded bg-gray-500 text-white">Back</button>
      <button 
        onClick={handleEnlist} 
        className="mt-2 py-1 px-4 rounded bg-blue-500 text-white" 
        disabled={enlisting}
      >
        {enlisting ? 'Enlisted' : 'Enlist'}
      </button>
      </div>
      </div>      
    </div>
  );
}

export default BotSpecs;
