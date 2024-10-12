import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from '../redux/apiSlice';

const Quote = () => {
    const dispatch = useDispatch();
    const { quote, author, loading, error } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchQuote());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Random Quote</h2>
            <blockquote>
                <p>"{quote}"</p>
                <footer>- {author}</footer>
            </blockquote>
            <button onClick={() => dispatch(fetchQuote())}>Get Another Quote</button>
        </div>
    );
};

export default Quote;
