import React, { useState, useEffect } from 'react';
import MainPage from './pages/MainPage/MainPage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const name = prompt("Введите ваше имя:");
    const lastname = prompt("Введите вашу фамилию:");

    if (name === "John" && lastname === "Johns") {
      setUser({ name, lastname });
    }
  }, []);

  return (
    <div>
      {user ? <MainPage user={user} /> : <p>Введенные имя и фамилия неверны</p>}
    </div>
  );
}

export default App;
