import FetchData from './components/FetchData'
import { useState } from 'react'
import BotArmy from './components/BotArmy';
import SearchBar from './components/SearchBar';
import BotSpecs from './components/BotsSpecs';
import SortBar from './components/SortBar';

function App() {
  const [selectedBots, setSelectedBots] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('health');
  const [viewBot, setViewBot] = useState(null);

  const handleSelectBot = (bot) => {
    if (!selectedBots.some(selectedBot => selectedBot.id === bot.id)) {
      setSelectedBots([...selectedBots, bot])
    }
  }

  const handleReleaseBot = (botId) => {
    setSelectedBots(selectedBots.filter(bot => bot.id !== botId));
  };

  const handleDischargeBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, { method: 'DELETE' })
      .then(() => {
        setSelectedBots(selectedBots.filter(bot => bot.id !== botId));
      });
  };

  const handleViewBot = (bot) => {
    setViewBot(bot);
  };

  const handleBack = () => {
    setViewBot(null);
  };

  return (
    <div className="App min-h-screen bg-gray-100 flex  items-center">
        <div className="w-2/3 pl-4">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <SortBar sortBy={sortBy} setSortBy={setSortBy} />
        {viewBot ? (
          <BotSpecs bot={viewBot} onEnlist={handleSelectBot} onBack={handleBack} />
        ) : (
          <FetchData 
            onSelectBot={handleSelectBot} 
            selectedBots={selectedBots} 
            searchQuery={searchQuery} 
            sortBy={sortBy}
            onViewBot={handleViewBot}
          />
        )}
        </div>  
      <div className="w-1/3">
          <BotArmy selectedBots={selectedBots} onReleaseBot={handleReleaseBot} />
        </div>

    </div>   
  )
}

export default App
