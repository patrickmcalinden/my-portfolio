'use client'; // <--- Mark as Client Component

import React, { useState, useEffect } from 'react';

export default function MyClientComponent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>I am a client component!</p>
      <button onClick={() => setCount(c => c + 1)}>Click me: {count}</button>
      {}
    </div>
  );
}

