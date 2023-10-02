import React from 'react';
import './App.css';

export default function App() {

  return (
    <div className="container" onPointerMove={(event) => {
      event.preventDefault();
   
    }}>
      <div className="pointer">
      </div>
    </div>
  );
}