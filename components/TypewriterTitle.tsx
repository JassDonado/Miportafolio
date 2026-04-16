'use client';

import { useEffect, useState } from 'react';

export default function TypewriterTitle() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Jasseff Dev';

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [displayText]);

  const beforeDev = displayText.slice(0, 8); // "Jasseff "
  const devPart = displayText.slice(8); // "Dev"

  return (
    <h1 className="text-5xl font-bold md:text-7xl">
      {beforeDev}
      {devPart && <span className="text-violet-800">{devPart}</span>}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
