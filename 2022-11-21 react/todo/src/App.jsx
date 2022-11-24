import Todolist from "./components/Todolist";

function App() {
    const todos = [
        { id: 1, completed: false, mission: 'Watch a game', importance: true },
        { id: 2, completed: false, mission: 'Learn React', importance: false },
        { id: 3, completed: false, mission: 'Get beer and chips' },
        { id: 4, completed: false, mission: 'Run 10 km', importance: true },
    ];
    let colorOne = 'orangered';

    const onCheck = function (id) {
        // change todos[id].completed to true
        console.log(`${id} to check or uncheck`);
    };

    return (
        <div className="App">
            <div className="wrapper">
                <h1>TODO LIST</h1>
                {/* tobedone and importantcolor are parameters for the function Todolist(), shortly called 'props'  */}
                <Todolist toBeDone={todos} importantColor={colorOne}
                    onCheck={onCheck}
                />
            </div>
        </div>
    );
}

export default App;
