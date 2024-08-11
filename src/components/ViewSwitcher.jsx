import React from 'react';

function ViewSwitcher({ currentView, onChangeView }) {
  return (
    <div className="mb-4">
      <button
        className={`p-2 border rounded ${currentView === 'bots' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        onClick={() => onChangeView('bots')}
      >
        Show Bots
      </button>
      <button
        className={`p-2 border rounded ${currentView === 'army' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        onClick={() => onChangeView('army')}
      >
        Show Army
      </button>
    </div>
  );
}

export default ViewSwitcher;
