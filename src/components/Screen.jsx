import { useSelector } from 'react-redux';
import './Screen.scss';

const thousandSeparator = num => {
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

const Screen = () => {
  const operand = useSelector(state => state.operand);
  const answer = useSelector(state => state.answer);
  const detail = useSelector(state => state.detail);


  let value = '';
  operand
    ? (value = thousandSeparator(operand))
    : (value = thousandSeparator(answer));


  return (
    <div className="screen">
      <p className="screen__detail">{detail}</p>
      <p className="screen__equal">=</p>
      <div className="screen__main">
        <p
          className={
            value.toString().length < 10
              ? 'screen__answer '
              : 'screen__answer smaller'
          }
        >
          {value}
        </p>
      </div>
     
    </div>
  );
};

export default Screen;
