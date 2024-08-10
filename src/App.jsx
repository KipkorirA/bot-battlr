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
    <div className="App min-h-screen bg-gray-100 flex  items-center">
      <div className="w-2/3 bg-white shadow-lg rounded-lg p-4">
        <FetchData onSelectBot={handleSelectBot} selectedBots={selectedBots}/>
      </div>  
      <BotArmy selectedBots={selectedBots} onReleaseBot={handleReleaseBot} />
    </div>   
  )
}

export default App
