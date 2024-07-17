import "../index.css";
export default function Avatar(props) {
  return (
    <>
      <img className="avatar-img" src={props.src} alt='avatar-img' />
    </>
  );
}
