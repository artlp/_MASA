import PropTypes from "prop-types";

export default function TodoItem({ num, task, onCheck }) {
    return (
        <li>
            <span>
                <input type="checkbox"
                    onClick={() => {
                        onCheck(task.id);
                    }} />
                <strong>&nbsp;{num + 1 + '. '}&nbsp;</strong>{task.mission}
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