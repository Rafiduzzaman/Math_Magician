import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Button = ({
  label, span, isOperator, onClick,
}) => (
  <button
    className={`calculator-button ${isOperator ? 'operator' : ''}`}
    type="button"
    style={span ? { gridColumn: 'span 2' } : {}}
    onClick={onClick}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  span: PropTypes.bool,
  isOperator: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  span: false,
  isOperator: false,
};

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const [currentOperation, setCurrentOperation] = useState('');
  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);

    if (buttonName === 'AC') {
      setCurrentOperation('');
      setCalculatorData({
        total: null,
        next: null,
        operation: null,
      });
    } else if (buttonName === '=' && newData.total !== null) {
      setCurrentOperation('');
    } else if (buttonName === '+/-') {
      setCurrentOperation(`-${currentOperation}`);
    } else {
      setCurrentOperation((prevOperation) => prevOperation + buttonName);
    }

    setCalculatorData(newData);
  };

  return (
    <div className="wrapper">
      <div className="Header">
        <h1>Let&apos;s do some math!</h1>
      </div>
      <div className="calculator">
        <div className="calculator-display">
          {currentOperation
            || calculatorData.next
            || calculatorData.total
            || '0'}
        </div>
        <div className="calculator-grid">
          {/* Row 1 */}
          <Button label="AC" onClick={() => handleButtonClick('AC')} />
          <Button label="+/-" onClick={() => handleButtonClick('+/-')} />
          <Button label="%" onClick={() => handleButtonClick('%')} />
          <Button label="÷" isOperator onClick={() => handleButtonClick('÷')} />

          {/* Row 2 */}
          <Button label="7" onClick={() => handleButtonClick('7')} />
          <Button label="8" onClick={() => handleButtonClick('8')} />
          <Button label="9" onClick={() => handleButtonClick('9')} />
          <Button label="x" isOperator onClick={() => handleButtonClick('x')} />

          {/* Row 3 */}
          <Button label="4" onClick={() => handleButtonClick('4')} />
          <Button label="5" onClick={() => handleButtonClick('5')} />
          <Button label="6" onClick={() => handleButtonClick('6')} />
          <Button label="-" isOperator onClick={() => handleButtonClick('-')} />

          {/* Row 4 */}
          <Button label="1" onClick={() => handleButtonClick('1')} />
          <Button label="2" onClick={() => handleButtonClick('2')} />
          <Button label="3" onClick={() => handleButtonClick('3')} />
          <Button label="+" isOperator onClick={() => handleButtonClick('+')} />

          {/* Row 5 */}
          <Button label="0" onClick={() => handleButtonClick('0')} span />
          <Button label="." onClick={() => handleButtonClick('.')} />
          <Button label="=" isOperator onClick={() => handleButtonClick('=')} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
