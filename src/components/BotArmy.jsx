

function BotArmy({ selectedBots, onReleaseBot }) {
  return (
    <div className="flex flex-wrap space-y-4 space-x-4 items-start p-1 bg-gray-200 rounded-lg ">
         {selectedBots.length === 0 ? (
        <p className="text-center text-gray-600 w-full">No bots selected.</p>
      ) : (
        selectedBots.map((bot) => (
          <div 
            key={bot.id} 
            className="flex flex-col items-center border rounded-lg p-4 shadow-md bg-blue-400 mb-4"
            style={{ minWidth: '200px' }} 
          >
      <h2 className="text-2xl font-bold text-black mb-4">Your Bot Army</h2>
      <p className="text-gray-700">Health: <span className="font-medium">{bot.health}</span></p>
            <p className="text-gray-700">Damage: <span className="font-medium">{bot.damage}</span></p>
            <p className="text-gray-700">Armor: <span className="font-medium">{bot.armor}</span></p>
            <button 
              className="mt-2 py-1 px-4 rounded bg-red-600 text-white"
              onClick={() => onReleaseBot(bot.id)}
            >
              Release
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default BotArmy;
