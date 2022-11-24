import PropTypes from "prop-types";

export default function TodoItem({ num, task, onCheck }) {

    let completedClass = task.completed ? "completed" : "";


    return (
        <li>
            <span>
                <input type="checkbox"
                    onClick={() => {
                        onCheck(task.id);
                    }} />
                <strong>&nbsp;{num + 1 + '. '}&nbsp;</strong>
                <span className={completedClass}>{task.mission}</span>
            </span>

            <button className="delete">&times;</button>
        </li>
    );
}

TodoItem.propTypes = {
    task: PropTypes.object.isRequired,
    num: PropTypes.number.isRequired,
    onCheck: PropTypes.func.isRequired,
};