// redux/calculatorSlice.js
const initialState = {
    num1: '',
    num2: '',
    result: null,
};

// Редюсер для операций
export const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NUM1':
            return { ...state, num1: action.payload };
        case 'SET_NUM2':
            return { ...state, num2: action.payload };
        case 'ADD':
            return { ...state, result: Number(state.num1) + Number(state.num2) };
        case 'SUBTRACT':
            return { ...state, result: Number(state.num1) - Number(state.num2) };
        case 'MULTIPLY':
            return { ...state, result: Number(state.num1) * Number(state.num2) };
        case 'DIVIDE':
            return { ...state, result: state.num2 !== '0' ? Number(state.num1) / Number(state.num2) : 'Cannot divide by zero' };
        default:
            return state;
    }
};

// Action Creators
export const setNum1 = (num) => ({
    type: 'SET_NUM1',
    payload: num,
});

export const setNum2 = (num) => ({
    type: 'SET_NUM2',
    payload: num,
});

export const add = () => ({ type: 'ADD' });
export const subtract = () => ({ type: 'SUBTRACT' });
export const multiply = () => ({ type: 'MULTIPLY' });
export const divide = () => ({ type: 'DIVIDE' });
