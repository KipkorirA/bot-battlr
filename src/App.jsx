import FetchData from './components/FetchData'
import { useState } from 'react'
import BotArmy from './components/BotArmy';
import SearchBar from './components/SearchBar';
import BotSpecs from './components/BotsSpecs';
import SortBar from './components/SortBar';
import ViewSwitcher from './components/ViewSwitcher'

function App() {
  const [selectedBots, setSelectedBots] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('health');
  const [viewBot, setViewBot] = useState(null);
  const [view, setView] = useState('bots')
  const [showBots, setShowBots] = useState(false)
  const [showArmy, setShowArmy] = useState(false)

  const handleSelectBot = (bot) => {
    if (!selectedBots.some(selectedBot => selectedBot.id === bot.id)) {
      setSelectedBots([...selectedBots, bot])
    }
  }

  const handleReleaseBot = (botId) => {
    setSelectedBots(selectedBots.filter(bot => bot.id !== botId));
  };

  const handleViewBot = (bot) => {
    setViewBot(bot);
    setView('bots'); 
  }

  const handleBack = () => {
    setViewBot(null);
  };

  const handleViewChange = (newView) => {
    setView(newView);
    setViewBot(null); 
  }


  const toggleBots = () => {
    setShowBots(prev => !prev)
  };

  const toggleArmy = () => {
    setShowArmy(prev => !prev)
  };

  return (
    <div className="App min-h-screen bg-gray-100 flex  items-center">
       
       <ViewSwitcher currentView={view} onChangeView={handleViewChange} />
        
        {view === 'bots' && (
          <>
          <button
            onClick={toggleBots}
            className="mb-4 p-2 border rounded bg-blue-500 text-white"
          >
            {showBots ? 'Hide Bots' : 'Show Bots'}
          </button>
      {showBots && (   
       <div className="w-full max-w-4xl flex">
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
       </div>
      )}
       </>
      )}
      
      {view === 'army' && (
        <>
          <button
            onClick={toggleArmy}
            className="mb-4 p-2 border rounded bg-blue-500 text-white"
          >
            {showArmy ? 'Hide Army' : 'Show Army'}
          </button>
          {showArmy && (
            <div className="w-full max-w-4xl flex">
              <BotArmy selectedBots={selectedBots} onReleaseBot={handleReleaseBot} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
export default App
