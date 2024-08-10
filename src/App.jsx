import FetchData from './components/FetchData'
import { useState } from 'react'
import BotArmy from './components/BotArmy';
function App() {
  const [selectedBots, setSelectedBots] = useState([]);

  const handleSelectBot = (bot) => {
    if (!selectedBots.some(selectedBot => selectedBot.id === bot.id)) {
      setSelectedBots([...selectedBots, bot])
    }
  }

  const handleReleaseBot = (botId) => {
    setSelectedBots(selectedBots.filter(bot => bot.id !== botId));
  };

  return (
    <div className="App min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-4xl p-4 bg-white shadow-lg rounded-lg mb-4">
        <FetchData onSelectBot={handleSelectBot} />
      </div>  
      <BotArmy selectedBots={selectedBots} onReleaseBot={handleReleaseBot} />
    </div>   
  )
}

export default App
