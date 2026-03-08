import { useState } from 'react';
import styled from 'styled-components';

const CalculatorSection = styled.div`
  background: #9e9e9e;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 3rem;
  color: white;

  h2 {
    color: white;
    border-bottom: 3px solid white;
  }

  .description {
    color: white;
  }
`;

const CalculatorContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 1.5rem;

  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`;

const Display = styled.div`
  background: #464646;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  text-align: right;
`;

const Output = styled.h3<{ $negative?: boolean }>`
  color: ${props => props.$negative ? '#e74c3c' : 'white'};
  font-size: calc(1.8rem + 0.5vw);
  margin: 0;
  word-wrap: break-word;
`;

const Inputs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  min-width: 150px;
  padding: calc(0.8rem + 0.2vw);
  font-size: calc(1rem + 0.2vw);
  border: 2px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #9e9e9e;
  }

  @media screen and (max-width: 480px) {
    min-width: 100%;
  }
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Button = styled.button<{ $clear?: boolean }>`
  padding: calc(1rem + 0.3vw);
  font-size: calc(1.1rem + 0.2vw);
  font-weight: 600;
  border: none;
  border-radius: 5px;
  background: ${props => props.$clear ? '#bababa' : '#9e9e9e'};
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${props => props.$clear ? '#c8c8c8' : '#b5b5b5'};
  }

  ${props => props.$clear && `
    grid-column: span 3;
    
    @media screen and (max-width: 750px) {
      grid-column: span 2;
    }
  `}
`;

function Calculator() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState(0);

    function doAdd() {
        setOutput(Number(input1) + Number(input2));
    }

    function doSubtract() {
        setOutput(Number(input1) - Number(input2));
    }

    function doMultiply() {
        setOutput(Number(input1) * Number(input2));
    }

    function doDivide() {
        const num2 = Number(input2);
        if (num2 === 0) {
            alert('Cannot divide by zero');
            return;
        }
        setOutput(Number(input1) / num2);
    }

    function doPower() {
        const base = Number(input1);
        const exponent = Number(input2);

        if (!Number.isInteger(exponent)) {
            alert('Exponent must be an integer');
            return;
        }

        let result = 1;
        const absExponent = Math.abs(exponent);

        for (let i = 0; i < absExponent; i++) {
            result = result * base;
        }

        if (exponent < 0) {
            result = 1 / result;
        }

        setOutput(result);
    }

    function doClear() {
        setInput1("");
        setInput2("");
        setOutput(0);
    }

    return (
        <CalculatorSection>
            <h2>JavaScript Calculator</h2>
            <p className="description">Behold! Vanilla Javascript Calculator</p>

            <CalculatorContainer>
                <Display>
                    <Output>
                        {output}
                    </Output>
                </Display>

                <Inputs>
                    <Input
                        type="text"
                        id="first-number"
                        value={input1}
                        placeholder="First number"
                        onChange={(e) => setInput1(e.target.value)}
                    />
                    <Input
                        type="text"
                        id="second-number"
                        value={input2}
                        placeholder="Second number"
                        onChange={(e) => setInput2(e.target.value)}
                    />
                </Inputs>

                <Buttons>
                    <Button onClick={doAdd}>+</Button>
                    <Button onClick={doSubtract}>-</Button>
                    <Button onClick={doMultiply}>*</Button>
                    <Button onClick={doDivide}>/</Button>
                    <Button onClick={doPower}>**</Button>
                    <Button onClick={doClear} className="clear-btn">Clear</Button>
                </Buttons>
            </CalculatorContainer>
        </CalculatorSection>
    );
}

export default Calculator;