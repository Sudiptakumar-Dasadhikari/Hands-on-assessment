import React, { useState } from 'react';
import './App.css';

function App() {
const [color, setColor] = useState('White');

return ( <div className="container"> <h1>Color Changer App</h1>


  <button onClick={() => setColor('Red')}>Red</button>
  <button onClick={() => setColor('Green')}>Green</button>
  <button onClick={() => setColor('Blue')}>Blue</button>

  <div className="box" style={{ backgroundColor: color }}>
    Selected Color: {color}
  </div>
</div>


);
}

export default App