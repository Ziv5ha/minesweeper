import React, { useRef, useState } from 'react';
import Tile from './components/Tile';
import { createGame, genetareTableClicked } from './helpers/createTable';
import './app.css';
import { revealTile } from './helpers/revealTile';
import { checkWin } from './helpers/rules';
import Banner from './components/Banner';

const GAMESIZE = 10;

function App() {
  const game = useRef(createGame(GAMESIZE, GAMESIZE));
  const { table, bombsArr } = game.current;
  const [clicked, setClicked] = useState(genetareTableClicked(GAMESIZE));
  const [flagsArr, setFlagsArr] = useState<number[][]>([]);
  const [flagsNum, setFlagsNum] = useState(GAMESIZE);
  const [gameState, SetgameState] = useState<
    'ready' | 'playing' | 'win' | 'lost'
  >('ready');

  const tableElem = table.map((rows, row) =>
    rows.map((tile, collumn) => {
      const onClickFunc = () => {
        if (table[row][collumn] === '💥') SetgameState('lost');
        const newClickedArr = revealTile(table, clicked, row, collumn);
        setClicked(newClickedArr);
      };
      const placeFlag = () => {
        if (flagsNum === 1) {
          if (checkWin(bombsArr, [...flagsArr, [row, collumn]])) {
            SetgameState('win');
          }
        } else {
          setFlagsArr((prev) => [...prev, [row, collumn]]);
          setFlagsNum((prev) => --prev);
        }
      };
      const removeFlag = () => {
        const temp = flagsArr.filter(
          (flag) => flag[0] !== row || flag[1] !== collumn
        );
        setFlagsArr(temp);
        setFlagsNum((prev) => ++prev);
      };
      return (
        <Tile
          value={table[row][collumn]}
          clicked={clicked[row][collumn]}
          flagNum={flagsNum}
          gameState={gameState}
          onClickFunc={onClickFunc}
          placeFlag={placeFlag}
          removeFlag={removeFlag}
        />
      );
    })
  );
  return (
    <div className='App'>
      <div className='game'>{tableElem}</div>
      {gameState === 'win' ? <Banner type='win' /> : ''}
      {gameState === 'lost' ? <Banner type='lose' /> : ''}
    </div>
  );
}

export default App;
