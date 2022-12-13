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
    board: number[][]
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
    board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
}

export const createGame = createSlice({
    name: 'game',
    initialState,
    reducers: {
        changePlayer: (state, action: PayloadAction<number>) => {
            state.currentPlayerId = action.payload
        },
        makeMove: (state, action: PayloadAction<MakeMove>) => {
            console.log(action)
            state.board[action.payload.row][action.payload.column] = state.currentPlayerId
            state.currentPlayerId = state.currentPlayerId === 1 ? -1 : 1;
        }
    }
})
export const {changePlayer, makeMove} = createGame.actions;

export const board = (state: RootState) => state.gameEngineReducer.board
export const currentPlayer = (state: RootState) => state.gameEngineReducer.currentPlayerId
export default createGame.reducer;