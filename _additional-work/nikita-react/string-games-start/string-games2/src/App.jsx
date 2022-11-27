import './App.css';
import { Gematria } from './components/gematria.jsx';
import { Clock } from './components/clock.jsx'

function App() {
    return (
        <div className="App">
            <section className="above"><Clock/><Gematria/></section>
            <section className="below"></section>
        </div>
    );
}

export default App;
