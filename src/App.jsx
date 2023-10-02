import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <div className="container" onPointerMove={(event) => {
      setX(event.clientX);
      setY(event.clientY);
   
    }}>
      <div className="pointer"
          style={{transform: `translate(${x}px, ${y}px)`
          }}
      />
    </div>
  );
}