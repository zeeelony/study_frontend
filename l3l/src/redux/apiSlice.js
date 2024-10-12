const initialState = {
    quote: '',
    author: '',
    loading: false,
    error: null,
};

export const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_QUOTE_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_QUOTE_SUCCESS':
            return { ...state, loading: false, quote: action.payload.content, author: action.payload.author };
        case 'FETCH_QUOTE_FAILURE':
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};

export const fetchQuoteRequest = () => ({
    type: 'FETCH_QUOTE_REQUEST',
});

export const fetchQuoteSuccess = (data) => ({
    type: 'FETCH_QUOTE_SUCCESS',
    payload: data,
});

export const fetchQuoteFailure = (error) => ({
    type: 'FETCH_QUOTE_FAILURE',
    error,
});

export const fetchQuote = () => {
    return async (dispatch) => {
        dispatch(fetchQuoteRequest());
        try {
            const response = await fetch('http://api.quotable.io/random');
            const data = await response.json();
            dispatch(fetchQuoteSuccess(data));
        } catch (error) {
            dispatch(fetchQuoteFailure(error.message));
        }
    };
};
