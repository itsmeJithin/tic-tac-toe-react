import './assets/styles.css';
import '@fortawesome/react-fontawesome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import BoxComponent from './component/BoxComponent';

library.add(fas);

function App() {
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
                <button id="restart">Restart</button>
            </div>
            <div className="popup hide">
                <p id="message">Sample Message</p>
                <button id="new-game">New Game</button>
            </div>
        </div>
    );
}

export default App;
