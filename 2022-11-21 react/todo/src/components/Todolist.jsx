import React from 'react';
import TodoItem from './TodoItem';


export default function Todolist(props) {
    // console.log(props);
    const styles = {
        ul: {
            margin: 0,
            listStyle: 'none',
            fontSize: '1.4rem',
            paddingLeft: '3%',
        },
    };
    return (
        <div className="todolist">
            <ul style={styles.ul}>
            {props.toBeDone.map((task,index) => {
                return <TodoItem mission={task.mission}
                key = {task.id}
                num = {index}
                />
            })}

            </ul>
        </div>
    );
}
