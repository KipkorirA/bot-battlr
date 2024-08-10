import React from 'react';

function BotArmy({ selectedBots, onReleaseBot }) {
  return (
    <div className="w-full max-w-4xl p-4 bg-gray-200 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-black mb-4">Your Bot Army</h2>
      {selectedBots.length === 0 ? (
        <p className="text-gray-600">No bots in your army yet.</p>
      ) : (
        <ul className="space-y-4">
          {selectedBots.map(bot => (
            <li key={bot.id} className="border rounded-lg p-4 shadow-md">
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{bot.name}</h3>
                <p className="text-gray-700">Health: {bot.health}</p>
                <p className="text-gray-700">Damage: {bot.damage}</p>
                <p className="text-gray-700">Armor: {bot.armor}</p>
                <button
                  className="mt-2 bg-red-500 text-white py-1 px-4 rounded"
                  onClick={() => onReleaseBot(bot.id)}>
                  Release
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BotArmy;
