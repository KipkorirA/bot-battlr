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
    <div  className="bg-cover"
    style={{
      backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3V4KO-c_FFOAk72w26u3KXq0zSx4eKJTz2A&s')"
    }}>
       
       <ViewSwitcher  currentView={view} onChangeView={handleViewChange} />
       
        {view === 'bots' && (
          <div className="flex justify-center mt-4">  
          <button
            onClick={toggleBots}
            className="mb- p-2 border rounded bg-red-500 text-white"
          >
            {showBots ? 'Hide Bots' : 'Show Bots'}
          </button>      
      </div>
        )}
      {view === 'bots' && showBots && (   
       <div className="flex flex-col items-center mt-4">
        <div className="flex flex-wrap justify-center w-full max-w-4xl">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <SortBar sortBy={sortBy} setSortBy={setSortBy} />
        </div>
        <div className="w-full mt-4">
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
       
      
      
      {view === 'army' && (
        <div className="flex justify-center mt-4">
          <button
            onClick={toggleArmy}
            className="p-2 border rounded bg-blue-500 text-white"
          >
            {showArmy ? 'Hide Army' : 'Show Army'}
          </button>
          </div>
      )}

          {view === 'army' && showArmy && (
            <div className="flex justify-center mt-4">
              <div className="w-full ">
              <BotArmy selectedBots={selectedBots} onReleaseBot={handleReleaseBot} />
            </div>
            </div>
          )}
        </div>
    
  );
}
export default App
