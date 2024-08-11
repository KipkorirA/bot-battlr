import { useState } from 'react';

function ViewSwitcher({ currentView, onChangeView }) {
  
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(prev => !prev);
  
  return (
    <div className="relative mb-4 space-x-2 flex justify-center">
      <button
        onClick={toggleDropdown}
        className="mb-4 p-2 border rounded bg-gray-300 text-black hover:bg-gray-400"
      >
        {isOpen ? 'Close Menu' : 'Open Menu'}
        </button>

     {isOpen && (
        <div className="absolute top-full mt-2 w-48 bg-white border rounded shadow-lg z-10 flex flex-col items-center">
          <button
            className={`block w-full text-left px-4 py-2 rounded ${currentView === 'bots' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => {
              onChangeView('bots');
              setIsOpen(false)
            }}
          >
            Show Bots
          </button>
          <button
            className={`block w-full text-left px-4 py-2 rounded ${currentView === 'army' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => {
              onChangeView('army')
              setIsOpen(false) 
            }}
          >
            Show Army
          </button>
        </div>
      )}
    </div>
  );
}

export default ViewSwitcher;
