import React from 'react';

export default function Banner({ type }: { type: string }) {
  return type === 'win' ? (
    <div className='game-ended'>
      <div className='win banner'>YOU WON!</div>
      <div className='emoji'>🏆</div>
    </div>
  ) : (
    <div className='game-ended'>
      <div className='lose banner'>YOU LOST!</div>
      <div className='emoji'>💣</div>
    </div>
  );
}
