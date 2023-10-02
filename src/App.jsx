import React, { useState} from 'react';
import AnimatedCursor from "react-animated-cursor";
import image from "./img/target.png";
import './App.css';

export default function App() {
  const [position, setPosition] = useState({x:0, y:0});

  return ( 
    <div className="container" onPointerMove={(event) => {
      setPosition({x:event.clientX, y:event.clientY});
    }}>
        <div className="pointer" style={{ backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat",backgroundSize:"contain", transform: `translate(${position.x}px, ${position.y}px)` }}
        >
        </div>
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={3}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: 'var(--cursor-color)'
          }}
          outerStyle={{
            border: '2px solid var(--cursor-color)'
          }}
        /> 
    </div>  
  );
}