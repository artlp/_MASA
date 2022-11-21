import Todolist from "./components/Todolist";

function App() {
    const todos = [
        { completed: false, mission: 'Watch a game', importance: true },
        { completed: false, mission: 'Learn React', importance: false },
        { completed: false, mission: 'Get beer and chips' },
        { completed: false, mission: 'Run 10 km', importance: true },
    ];
    let colorOne = 'orangered';


    return (
        <div className="App">
            <div className="wrapper">
                <h1>TODO LIST</h1>
                {/* tobedone and importantcolor are parameters for the function Todolist(), shortly called 'props'  */}
                <Todolist toBeDone={todos} importantColor={colorOne} />
            </div>
        </div>
    );
}

export default App;
