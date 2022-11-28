import React from 'react';
import { Fragment } from 'react';
import { useState } from 'react';

export default function AddToDo({ addNewTodo }) {
    const [mission, setMission] = useState('');

    const onSubmit = (event) => {
        event.preventDefault(); //the default was to send data and refresh page
        if (mission) {
            addNewTodo(mission);
            setMission('');
        }
        addNewTodo(mission);
    };
    return (
        <Fragment>
            <div className="addtodo">
                <h3>Add a task</h3>
                <form onSubmit={onSubmit} action="post"><input type="text" name="" id="taskinput" placeholder="Add a task" onChange={(e)=> {
                    setMission(e.target.value)}} value={mission}/><input type="submit" value="Add" id="addtaskbtn" /></form>
            </div>
        </Fragment>
    );
}
