import { useState } from 'react';
import './App.scss';
import HistoryIcon from '/history.svg';
import Screen from './components/Screen';
import BottomPanel from './components/BottomPanel';

const App = () => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="App">
      <div className="history-btn">
        <button
          className="history-btn__item"
          onClick={() => setShowHistory(prev => !prev)}
        >
          <img src={HistoryIcon} alt="history" />
        </button>
      </div>
      <Screen />
      <BottomPanel showHistory={showHistory} />
    </div>
  );
};

export default App;
