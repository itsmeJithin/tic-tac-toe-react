import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {changePlayer, makeMove, board, currentPlayer} from "./GameEngineStore";
import {useAppSelector, useAppDispatch} from "../store/hooks";
import MakeMove from "../dto/MakeMove";

type Props = {
    row: number,
    column: number
}

function BoxComponent({row, column}: Props) {
    const gameBoard = useAppSelector(board)
    const player = useAppSelector(currentPlayer)
    const dispatch = useAppDispatch();
    const move: MakeMove = {
        row: row,
        column: column
    };
    return (
        <button className="button-option" onClick={() => dispatch(makeMove(move))}>
            {gameBoard[row][column] === 1 && <FontAwesomeIcon icon={["fas", "times"]}/>}
            {gameBoard[row][column] === -1 && <FontAwesomeIcon icon={["fas", "o"]}/>}
        </button>
    );
}

export default BoxComponent;
