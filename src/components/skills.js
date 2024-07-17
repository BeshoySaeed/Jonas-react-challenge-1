import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkiing } from "@fortawesome/free-solid-svg-icons";
import "../index.css";
export default function Skills(props) {
  return (
    <span className='skill-container' style={{ backgroundColor: props.color }}>
      <FontAwesomeIcon icon={faSkiing} />
      <p className='skill-name'> {props.name}</p>
    </span>
  );
}
