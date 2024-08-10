import FetchData from './components/FetchData'
import { useState } from 'react'

function App() {
  const [selectedBots, setSelectedBots] = useState([]);

  const handleSelectBot = (bot) => {
    if (!selectedBots.some(selectedBot => selectedBot.id === bot.id)) {
      setSelectedBots([...selectedBots, bot])
    }
  }

  return (
    <div className="App min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-4xl p-4 bg-white shadow-lg rounded-lg mb-4">
        <FetchData onSelectBot={handleSelectBot} />
      </div>
      <div className="w-full max-w-4xl p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Your Selected Bots:</h2>
        <ul className="space-y-4">
          {selectedBots.map(bot => (
            <li key={bot.id} className="border rounded-lg p-4 shadow-md">
              <div>
                <h2 className="text-xl font-semibold mb-2">{bot.name}</h2>
                <p>Health: {bot.health}</p>
                <p>Damage: {bot.damage}</p>
                <p>Armor: {bot.armor}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>   
  )
}

export default App
