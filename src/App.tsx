import './assets/styles.css';
import '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import BoxComponent from './component/BoxComponent';
import {restart, isGameOver, winner} from "./component/GameEngineStore";
import {useAppDispatch, useAppSelector} from "./store/hooks";


library.add(fas);

function App() {
    const dispatch = useAppDispatch();
    const winnerPlayer = useAppSelector(winner)
    const gameOver = useAppSelector(isGameOver)
    let message = "";
    if (gameOver && winnerPlayer === 0) {
        message = "It's a Draw!"
    } else if (gameOver && winnerPlayer === -1) {
        message = "Player 2 Won"
    } else if (gameOver && winnerPlayer === 1) {
        message = "Player 1 Won"
    }
    return (
        <div className="App">
            <div className="wrapper">
                <div className="container">
                    <BoxComponent row={0} column={0}/>
                    <BoxComponent row={0} column={1}/>
                    <BoxComponent row={0} column={2}/>
                    <BoxComponent row={1} column={0}/>
                    <BoxComponent row={1} column={1}/>
                    <BoxComponent row={1} column={2}/>
                    <BoxComponent row={2} column={0}/>
                    <BoxComponent row={2} column={1}/>
                    <BoxComponent row={2} column={2}/>
                </div>
                <button id="restart" type={"button"} onClick={() => dispatch(restart())}>Restart</button>
            </div>
            {(gameOver || winnerPlayer !== 0) &&
              <div className="popup">
                <p id="message">{message}</p>
                <button id="new-game" type={"button"} onClick={() => dispatch(restart())}>New Game</button>
              </div>
            }

        </div>
    );
}

export default App;
