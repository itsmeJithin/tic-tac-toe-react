import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Player from "../models/Player";
import MakeMove from "../dto/MakeMove";
import {RootState} from "../store";

export interface GameStatus {
    isGameOver: Boolean,
    currentPlayerId: number,
    rowSum: number[],
    colSum: number[],
    diagSum: number,
    revDiagSum: number,
    board: number[][],
    boardSize: number,
    winner: number,
    filledCount: number
}

const player: Player = {
    id: 1,
    name: "Jithin"
}
const initialState: GameStatus = {
    isGameOver: false,
    currentPlayerId: 1,
    rowSum: [],
    colSum: [],
    diagSum: 0,
    revDiagSum: 0,
    board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    boardSize: 3,
    winner: 0,
    filledCount: 0
}

export const createGame = createSlice({
    name: 'game',
    initialState,
    reducers: {
        changePlayer: (state, action: PayloadAction<number>) => {
            state.currentPlayerId = action.payload
        },
        /**
         * @param state
         * @param action
         */
        makeMove: (state, action: PayloadAction<MakeMove>) => {
            const row = action.payload.row;
            const col = action.payload.column;
            if (state.board[row][col] )
                return
            state.board[row][col] = state.currentPlayerId
            ++state.filledCount;
            state.rowSum[row] = state.rowSum[row] ? state.rowSum[row] : 0;
            state.colSum[col] = state.colSum[col] ? state.colSum[col] : 0;
            state.rowSum[row] += state.currentPlayerId;
            state.colSum[col] += state.currentPlayerId;
            if (row === col) {
                state.diagSum += state.currentPlayerId;
            }
            if (row === state.boardSize - 1 - col) {
                state.revDiagSum += state.currentPlayerId;
            }
            if (Math.abs(state.rowSum[row]) === state.boardSize || Math.abs(state.colSum[col]) === state.boardSize || Math.abs(state.diagSum) === state.boardSize || Math.abs(state.revDiagSum) === state.boardSize) {
                state.winner = state.currentPlayerId;
                state.isGameOver = true;
            } else if (state.filledCount === (state.boardSize * state.boardSize)) {
                state.isGameOver = true;
            } else {
                state.currentPlayerId = state.currentPlayerId === 1 ? -1 : 1;
            }
        },
        restart: () => initialState
    }
})
export const {changePlayer, makeMove, restart} = createGame.actions;

export const board = (state: RootState) => state.gameEngineReducer.board
export const currentPlayer = (state: RootState) => state.gameEngineReducer.currentPlayerId

export const isGameOver = (state: RootState) => state.gameEngineReducer.isGameOver;

export const winner = (state: RootState) => state.gameEngineReducer.winner;
export default createGame.reducer;