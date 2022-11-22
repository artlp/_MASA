import PropTypes from "prop-types";

export default function TodoItem(props) {
    return (
        <li><input type="checkbox"/> <strong>{props.num + 1}</strong>. {props.mission} <button>❌</button></li>
    );
}

TodoItem.propTypes = {
    mission: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}