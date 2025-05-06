import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  const increment = () => setClickCount((prev) => prev+1);

  useEffect(() => {
    document.addEventListener('mousedown', increment);
    //this is cleanup function, if we don't add this return function, count doesn't work properly
    return() => {
      document.removeEventListener('mousedown', increment);
    }
  });

  return (
      <h1>Document Clicks: {clickCount}</h1>
  );
}

