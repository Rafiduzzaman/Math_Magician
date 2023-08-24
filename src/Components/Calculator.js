import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

const Button = ({ label, span, isOperator }) => (
  <button
    className={`calculator-button ${isOperator ? 'operator' : ''}`}
    type="button"
    style={span ? { gridColumn: 'span 2' } : {}}
  >
    {label}
  </button>
);

const Calculator = () => (
  <div className="calculator">
    <div className="calculator-display">0</div>
    <div className="calculator-grid">
      <Button label="AC" />
      <Button label="+/-" />
      <Button label="%" />
      <Button label="÷" isOperator />

      <Button label="7" />
      <Button label="8" />
      <Button label="9" />
      <Button label="x" isOperator />

      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <Button label="-" isOperator />

      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <Button label="+" isOperator />

      <Button label="0" span />
      <Button label="." />
      <Button label="=" isOperator />
    </div>
  </div>
);
Button.propTypes = {
  label: PropTypes.string.isRequired,
  span: PropTypes.bool,
  isOperator: PropTypes.bool,
};
Button.defaultProps = {
  span: false, // Set default value for span prop
  isOperator: false, // Set default value for isOperator prop
};
export default Calculator;
