import React, { useState } from 'react';

function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      setError('Все поля должны быть заполнены');
      return;
    }

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    if (isRegistered) {
      setError('Пользователь уже зарегистрирован');
      return;
    }

    setIsRegistered(true);
    setError('');
    alert('Пользователь успешно зарегистрирован!');
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <input
        type="text"
        placeholder="Имя пользователя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Подтвердите пароль"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Зарегистрироваться</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Registration;
