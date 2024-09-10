import React, { useState, useEffect } from 'react';

function MainPage({ user }){
  const [userInfo, setUserInfo] = useState({ name: '', lastname: '' });

  useEffect(() => {
    setUserInfo({ name: user.name, lastname: user.lastname });
  }, [user]);

  return (
    <>
      {userInfo.name && userInfo.lastname ? (
        <h1>
          Добро пожаловать {userInfo.name} {userInfo.lastname}, мы тебя ждали
        </h1>
      ) : (
        <p>Загрузка...</p>
      )}
    </>
  );
};

export default MainPage;
