import React from 'react';
import TodoItem from './TodoItem';


export default function Todolist(props) {
    console.log(props);
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
                <TodoItem mission={props.toBeDone[0].mission}/>
                <TodoItem mission={props.toBeDone[1].mission}/>
                <TodoItem mission={props.toBeDone[2].mission}/>
                <TodoItem mission={props.toBeDone[3].mission}/>
            </ul>
        </div>
    );
}
