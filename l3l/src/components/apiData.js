import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/apiSlice';

const ApiData = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Public APIs</h2>
            <ul>
                {data.map((api, index) => (
                    <li key={index}>
                        <strong>{api.API}:</strong> {api.Description} (<a href={api.Link} target="_blank" rel="noopener noreferrer">Visit</a>)
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ApiData;
