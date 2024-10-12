import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNum1, setNum2, add, subtract, multiply, divide } from '../redux/reducer';

const Calculator = () => {
    const dispatch = useDispatch();
    const { num1, num2, result } = useSelector((state) => state);

    return (
        <div>
            <h1>Redux Calculator</h1>
            <div>
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => dispatch(setNum1(e.target.value))}
                    placeholder="Enter first number"
                />
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => dispatch(setNum2(e.target.value))}
                    placeholder="Enter second number"
                />
            </div>

            <div>
                <button onClick={() => dispatch(add())}>+</button>
                <button onClick={() => dispatch(subtract())}>-</button>
                <button onClick={() => dispatch(multiply())}>*</button>
                <button onClick={() => dispatch(divide())}>/</button>
            </div>

            {result !== null && (
                <div>
                    <h2>Result: {result}</h2>
                </div>
            )}
        </div>
    );
};

export default Calculator;
