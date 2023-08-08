import React, { useState } from 'react';

const ColorButton = () => {
  const [color, setColor] = useState('');
  const colors = ['Red', 'Blue', 'Yellow', 'Orange', 'Purple', 'Pink'];

  function handleColor(newColor) {
    setColor(newColor);
    console.log(setColor(newColor));
  }

  return (
    <>
      {colors.map((color) => (
        <button key={color} onClick={() => handleColor(color)}>
          {color}
        </button>
      ))}
      <div className="container" style={{ backgroundColor: color }}>
        
      </div>
    </>
  );
};

export default ColorButton;

