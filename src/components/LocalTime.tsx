import React, { useEffect, useState } from 'react';

const LocalTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const getLocalTime = () =>
    date.toLocaleTimeString('us-US', {
      hour: 'numeric',
      minute: '2-digit',
    });

  return <span>{getLocalTime()}</span>;
};

export default LocalTime;
