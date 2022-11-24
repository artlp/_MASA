import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from "prop-types";


export default function Todolist({toBeDone, onCheck}) {
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
            { toBeDone.length > 0  ? toBeDone.map((task,index) => {
                return <TodoItem task={task}
                key = {task.id}
                num = {index}
                onCheck = {onCheck}
                />
            }) : <h4>No more tasks</h4> }
            </ul>
        </div>
    );
}
Todolist.propTypes = {
    toBeDone: PropTypes.array.isRequired,
    importantColor: PropTypes.string.isRequired,
    onCheck: PropTypes.func.isRequired,
}