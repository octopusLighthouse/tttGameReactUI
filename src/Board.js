import React from 'react';
import { Box } from './Box';

export function Board({ board, handleBoxClick, handleResetClick }){
        return (
                <div className="board-wrapper">
                    <div className="board">
                        <h2 className="board-heading">{(board.canPlay)?`Next turn ${board.nextTurn}`:''}</h2>

                        <div className="board-row">
                            <Box value={board.board[0]} onClick={() => handleBoxClick(0)} />

                            <Box value={board.board[1]} onClick={() => handleBoxClick(1)} />

                            <Box value={board.board[2]} onClick={() => handleBoxClick(2)} />
                        </div>

                        <div className="board-row">
                            <Box value={board.board[3]} onClick={() => handleBoxClick(3)} />

                            <Box value={board.board[4]} onClick={() => handleBoxClick(4)} />

                            <Box value={board.board[5]} onClick={() => handleBoxClick(5)} />
                        </div>

                        <div className="board-row">
                            <Box value={board.board[6]} onClick={() => handleBoxClick(6)} />

                            <Box value={board.board[7]} onClick={() => handleBoxClick(7)} />

                            <Box value={board.board[8]} onClick={() => handleBoxClick(8)} />
                        </div>

                        <h2 className="board-heading">{`${board.message}`}</h2>
                        <button className="reset-Button" onClick={() => handleResetClick()}>
                            {'Reset game'}
                        </button>
                    </div>
                </div>
        )
}