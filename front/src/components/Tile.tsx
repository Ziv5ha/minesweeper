import React, { useState } from 'react';

export default function Tile({
  value,
  clicked,
  flagNum,
  gameState,
  onClickFunc,
  placeFlag,
  removeFlag,
}: {
  value: number | string;
  clicked: boolean;
  flagNum: number;
  gameState: 'ready' | 'playing' | 'win' | 'lost';
  onClickFunc: () => void;
  placeFlag: () => void;
  removeFlag: () => void;
}) {
  const [flag, setFlag] = useState(' ');
  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    if (gameState !== 'win' && gameState !== 'lost') {
      if (e.type === 'click' && flag === ' ') {
        onClickFunc();
      } else if (e.type === 'contextmenu') {
        if (flag === ' ' && flagNum > 0) {
          setFlag('🚩');
          placeFlag();
        } else if (flag === '🚩') {
          setFlag(' ');
          removeFlag();
        }
      }
    }
  };
  if (!clicked || flag === '🚩') {
    return (
      <span className='tile' onClick={handleClick} onContextMenu={handleClick}>
        {flag}
      </span>
    );
  } else {
    return <span className='tile open'>{value}</span>;
  }
}
