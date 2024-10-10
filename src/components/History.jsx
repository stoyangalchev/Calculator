import { useSelector, useDispatch } from 'react-redux';
import { calcActions } from '../store';
import './History.scss';

const History = () => {
  const history = useSelector(state => state.history);
  const dispatch = useDispatch();
  const clearHistoryHandler = () => {
    dispatch(calcActions.clearHistory());
  };
  return (
    <div className={history.length > 0 ? "history" : "history center"}>
      {history.length > 0 ?<button className="clear-history-button" onClick={clearHistoryHandler}>Clear History</button>:""}  
      {history.length > 0 ? (
        history.map((item, index) => (
          <p key={index} className="history__item">
            {item[0]} =<span> {item[1]}</span>
          </p>
        ))
      ) : (
        <p className="history__notfound">You have no calculation history</p>
      )}
    </div>
  );
};

export default History;
