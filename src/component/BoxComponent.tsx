import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {board, currentPlayer, makeMove} from "./GameEngineStore";
import {useAppDispatch, useAppSelector} from "../store/hooks";
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
        <button className="button-option" onClick={() => dispatch(makeMove(move))}
                disabled={gameBoard[row][column] === 1 || gameBoard[row][column] === -1}>
            {gameBoard[row][column] === 1 && <FontAwesomeIcon icon={["fas", "times"]}/>}
            {gameBoard[row][column] === -1 && <FontAwesomeIcon icon={["fas", "o"]}/>}
        </button>
    );
}

export default BoxComponent;
