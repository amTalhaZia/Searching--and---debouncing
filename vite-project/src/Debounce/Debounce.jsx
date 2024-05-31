import React, { useEffect, useState } from 'react';

const useDebounce = (text, delay) => {
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text); 
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, );

  return debouncedText;
};

const Debounce = () => {
  const [text, setText] = useState('');
  const debouncedText = useDebounce(text, 1000);

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>Debounce: {debouncedText}</p>
    </div>
  );
};

export default Debounce;
