import PropTypes from "prop-types";

export default function TodoItem(props) {
    return (
        <li>
          <span>
            <input type="checkbox" 
                   onClick={() => { 
                    console.log('Checkbox is checked or unchecked')
                   }}/>
            <strong>&nbsp;{ props.num+1 + '. ' }</strong>{ props.mission }
          </span>
    
          <button className="delete">&times;</button>
        </li>
      )
    }

TodoItem.propTypes = {
    mission: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired,
}