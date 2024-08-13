import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Who from './components/Who';
import What from './components/What';
import Whiz from './components/Whiz';
import Which from './components/Which';
import Where from './components/Where';
import StarryBackground from './components/StarryBackground';

const App: React.FC = () => {
  return (
    <div style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none'}}>
      <StarryBackground />
      <div className="bg-transparent text-white font-sans">
        <Navbar />
        <div className="flex flex-col items-center px-40">
          <Welcome />
          <Who />
          <What />
          <Which />
          <Whiz />
          <Where />
        </div>
      </div>
    </div>
  );
};

export default App;