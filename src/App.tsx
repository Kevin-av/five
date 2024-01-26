import React from 'react';

import './App.css';

function App() {
  const handleClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    const dataName = target.getAttribute('data-name');
    alert(`${dataName}`);
    alert('Ecuador');
  };

  return (
    <div
      data-name={"Amarillo"}
      style={{
        width: '300px',
        height: '200px',
        backgroundColor: '#FFD100',
        position: 'relative',
      }}
      onClick={handleClick}
    >
      <div
        data-name={"Azul"}
        style={{
          width: '70%',
          height: '70%',
          backgroundColor: '#0033A0',
          position: 'absolute',
          top: '15%',
          left: '15%',
        }}
        onClick={handleClick}
      >
        <div
          data-name={"Rojo"}
          style={{
            width: '40%',
            height: '40%',
            backgroundColor: '#EC1C24',
            position: 'absolute',
            top: '30%',
            left: '30%',
          }}
          onClick={handleClick}
        ></div>
      </div>
    </div>
  );
}

export default App;

/*
import React, { Component } from 'react';

interface SpookyCounterProps {}

interface SpookyCounterState {
  spookyCount: number;
}

class SpookyCounter extends Component<SpookyCounterProps, SpookyCounterState> {
  constructor(props: SpookyCounterProps) {
    super(props);
    this.state = {
      spookyCount: 0
    };
  }

  render() {
    return (
      <div>
        <p>Conteo espeluznante: {this.state.spookyCount}</p>
        <button onClick={() => this.setState({ spookyCount: this.state.spookyCount + 1 })}>
          Aumentar miedo
        </button>
      </div>
    );
  }
}

export default SpookyCounter;

import { useState } from "react";

export default function EmojiCounter() {
  const[emoji, setEmoji] = useState("🐶")
  function handleButtonClick(){
    setEmoji(prevEmoji => prevEmoji + "🐶");
    setEmoji(prevEmoji => prevEmoji + "🐶🐶");
    setEmoji(prevEmoji => prevEmoji + "🐶🐶🐶");
  }

  return(
    <div>
      <h1>{emoji}</h1>
      <button onClick={handleButtonClick}>Add 3 Dogs</button>
    </div>
  )
};

import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return(
    <div>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </div>
  )
}

import React, { useState } from "react";

export default function EmojiCounter() {
  const [emoji, setEmoji] = useState("🐶");

  function handleButtonClick() {
    setEmoji((prevEmoji) => prevEmoji + "🐶");
  }
  function addTwoDogs() {
    setEmoji((prevEmoji) => prevEmoji + "🐶🐶");
  }
  function addThreeDogs() {
    setEmoji((prevEmoji) => prevEmoji + "🐶🐶🐶");
  }
  function resetEmoji(){
    setEmoji("🐶")
  }

  return (
    <div>
      <h1>{emoji}</h1>
      <button onClick={handleButtonClick}>Añade 1 perro</button>
      <button onClick={addTwoDogs}>Añade 2 perros</button>
      <button onClick={addThreeDogs}>Añade 3 perros</button>
      <button onClick={resetEmoji}>Reset</button>
    </div>
  );
}*/