import { useState } from 'react';
import TodoList from "./components/Todolist";

function App() {

    // use state creates array of the first value of todos,
    // and of the only function that may set the new value of todos
    const [todos, setTodos] = useState(
        [
            { id: 45, completed: false, mission: 'Get beer and chips', important: true },
            { id: 67, completed: false, mission: 'Watch a game' },
            { id: 11, completed: false, mission: 'Learn React' },
            { id: 425, completed: false, mission: 'Run 10km' }
        ]
    );

    /** STATE IS IMMUTABLE,
     * for example, we want that the new state will contain only the 1st
     * element of the old one.
     * We could change the state this way:
     *   todos.pop()
        todos.pop()
        todos.pop()
      BUT WE SHOULD NOT, STATE IS IMMUTABLE
      setTodos(todos[0])
      
     */



    let colorOne = 'orangered';

    const onCheck = (id) => {

        // console.log(`id to check or uncheck is ${id}`);

        const newTodos = todos.map(task => {

            if (task.id === id) task.completed = !task.completed;
            return task;

        });

        setTodos(newTodos);

    };

    const onX = (id) => {
        todos.filter(task => {
            return task.id !== id;
        });
    };

    return (
        <div className="App">
            <div className="wrapper">
                <h1>To Do</h1>
                {/** toBeDone, importantColor - parameters
         * for the function TodoList(), shortly called "props"
         */}
                <TodoList toBeDone={todos} importantColor={colorOne}
                    onCheck={onCheck} />
            </div>
        </div>
    );
}

export default App;
