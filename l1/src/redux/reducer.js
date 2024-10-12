const initialState = {
    value: 0
};

// Экшен для инкремента, декремента и сброса
export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + action.payload };
        case 'DECREMENT':
            return { value: Math.max(0, state.value - action.payload) }; // предотвращаем уход в минус
        case 'RESET':
            return { value: 0 };
        default:
            return state;
    }
};

export const increment = (amount) => ({
    type: 'INCREMENT',
    payload: amount
});

export const decrement = (amount) => ({
    type: 'DECREMENT',
    payload: amount
});

export const reset = () => ({
    type: 'RESET'
});
