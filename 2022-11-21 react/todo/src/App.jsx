import { useState } from 'react';
import TodoList from "./components/Todolist";
import Context from './context';
import AddToDo from './components/AddToDo';

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
        setTodos(todos.filter(task => task.id !== id));
    };

    const addNewTodo = (mission) => {
        //we use concat because it doesn't change our initial data
        setTodos(todos.concat({id: Date.now(), completed: false, mission}));

        //Date.now() is good for unique id as it is changing every second (it's a number of seconds passed since 01/01/1970)
    }

    return (
        <Context.Provider value={{onX}}>
        {/* double curled braces ^^ first is because it's JS, second is an object */}
            <div className="App">
                <div className="wrapper">
                    <h1>To Do</h1>
                    {/** toBeDone, importantColor - parameters
         * for the function TodoList(), shortly called "props"
         */}
                    <TodoList toBeDone={todos} importantColor={colorOne}
                        onCheck={onCheck} />
                        <AddToDo addNewTodo={addNewTodo}/> 
                </div>
            </div>
        </Context.Provider>
    );
}

export default App;
