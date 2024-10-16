import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';
import 'bootstrap/dist/css/bootstrap.min.css';

const YourComponent = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="container">
      {loading && <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}
      {error && <p className="text-danger">Error: {error}</p>}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
