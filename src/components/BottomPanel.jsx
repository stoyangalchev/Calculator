import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { calcActions } from '../store';
import History from './History';
import Button from './Button';
import './BottomPanel.scss';

const calButtons = [
  ['CLEAR', '/'],
  [1, 2, 3, 'x'],
  [4, 5, 6, '-'],
  [7, 8, 9, '+'],
  ['+/-', 0, '.', '='],
];

console.log(calButtons.flat());
const BottomPanel = ({ showHistory }) => {
  const dispatch = useDispatch();

  const numberHandler = e => {
    e.preventDefault();
    const value = e.target.innerHTML;
    dispatch(calcActions.addOperand(value));
  };

  const clearHandler = e => {
    e.preventDefault();
    dispatch(calcActions.clearOperand());
  };

  const operatorHandler = e => {
    e.preventDefault();
    const value = e.target.innerHTML;
    dispatch(calcActions.setOperator(value));
  };

  const equalHandler = e => {
    e.preventDefault();
    dispatch(calcActions.calculate());
  };

  const decimalHandler = e => {
    e.preventDefault();
    const value = e.target.innerHTML;
    dispatch(calcActions.setDecimal(value));
  };

  const plusMinusHandler = e => {
    e.preventDefault();
    const value = e.target.innerHTML;
    dispatch(calcActions.setPlusMinus(value));
  };

  return (
    <div className="bottom-panel">
      {showHistory ? (
        <History />
      ) : (
        <div className="button">
          {calButtons.flat().map((value, index) => {
            return (
              <Button
                key={index}
                type="button"
                className={
                  value === 'CLEAR'
                    ? 'button__item button__clear button__bg'
                    : typeof value === 'string'
                    ? 'button__item button__bg'
                    : 'button__item button__bg-orange'
                }
                value={value}
                onClick={
                  value === 'CLEAR'
                    ? clearHandler
                    : value === '+/-'
                    ? plusMinusHandler
                    : value === '='
                    ? equalHandler
                    : value === 'x' ||
                      value === '/' ||
                      value === '+' ||
                      value === '-'
                    ? operatorHandler
                    : value === '.'
                    ? decimalHandler
                    : numberHandler
                }
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BottomPanel;

BottomPanel.propTypes = {
  showHistory: PropTypes.bool.isRequired
};
