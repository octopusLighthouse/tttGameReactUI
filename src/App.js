import React, { useState, useEffect } from 'react';
import './styles/app.css';
import { Board } from './Board';
import Spinner from './Spinner';
import './styles/board.css'

function App() {
  console.log(`App started`);
  let [isGameDataLoaded, setGameDataState] = useState(false);
  let [board, setBoard] = useState({});


  useEffect(() => {
    fetchData();

    async function fetchData() {
      const requestOptions = {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          Accept: 'application/json', 
        },
      };

      const url = '/game/api/v1/board';
      const r = await fetch(url, requestOptions);
      const json = await r.json();
      setBoard(json);
      setGameDataState(true); 
    }
  }, []);

  const handleBoxClick = index => {
    if (board.canPlay) {
      setGameDataState(false); 
      fetchData(index);
    }

    async function fetchData(boxId) {
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Accept: 'application/json', 
        },
        body: JSON.stringify({ id: boxId, })
      };

      const url = '/game/api/v1/board';
      const r = await fetch(url, requestOptions);
      const json = await r.json();
      setBoard(json);
      setGameDataState(true); 
    }
  }

  async function handleResetClick() {
    setGameDataState(false); 
    const json = await(await fetch('/game/api/v1/reset', { method: 'POST', })).json();
    setBoard(json);
    setGameDataState(true); 
  }

  if (!isGameDataLoaded) {
    return (<Spinner />);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Board board={board} handleBoxClick={handleBoxClick} handleResetClick={handleResetClick} />
        </p>
        {board.logs.map((record)=>{
          return(<p className="log-record">{record}</p>)
        })}
      </header>
      
    </div>
  );
}

export default App;
