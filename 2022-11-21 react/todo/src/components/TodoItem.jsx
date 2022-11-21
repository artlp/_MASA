export default function TodoItem(props) {
    return (
      <li> {`${props.num+1} ✔️ ${props.mission}`}</li>
    )
  }

