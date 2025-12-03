import { useState } from 'react';
import dice1 from './assets/dice1.jpeg';
import dice2 from './assets/dice2.jpeg';
import dice3 from './assets/dice3.jpeg';
import dice4 from './assets/dice4.jpeg';
import dice5 from './assets/dice5.jpeg';
import dice6 from './assets/dice6.jpeg';
import qn from './assets/question_mark.png';
import './App.css';

const digits = [];
for (let i = 1; i <= 100; i++) {
  digits.push(i);
}

const App = () => {
  const dices = { 1: dice1, 2: dice2, 3: dice3, 4: dice4, 5: dice5, 6: dice6 };
  const [currentDice, setCurrentDice] = useState(qn);
  const [count, setCount] = useState(0);
  const [Keys, setKeys] = useState(digits);
  const [used, setUsed] = useState([]);


  function rollDice() {
    const randomIndex = Math.floor(Math.random() * 6) + 1;
    const newTotal = count + randomIndex;

    setCurrentDice(dices[randomIndex]);
    setCount(newTotal);

    setUsed([...used, newTotal]);
  }

  function undo() {
    used.pop();
    const lastUsed = used[used.length - 1] || 0;
    setCount(lastUsed);
    setUsed([...used]);
  }
  return (
    <div className="container">
      <div className="keyboard">
        {Keys.map((obj) => (
          <div
            key={obj}
            className={used.includes(obj) ? 'key active' : 'key'}
          >
            {obj}
          </div>
        ))}
      </div>

      <img className="dice-img" src={currentDice} alt="Current Dice" />
      <h2>Total: {count}</h2>
      <button onClick={rollDice}>Roll Dice</button>
      <button className="undo" onClick={undo}>Undo</button>
    </div>
  );
};

export default App;
