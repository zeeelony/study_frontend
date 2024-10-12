import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/reducer';

const counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.value);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment(1))}>+1</button>
            <button onClick={() => dispatch(decrement(1))} disabled={counter === 0}>-1</button>
            <button onClick={() => dispatch(increment(10))}>+10</button>
            <button onClick={() => dispatch(decrement(10))} disabled={counter === 0}>-10</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default counter;
