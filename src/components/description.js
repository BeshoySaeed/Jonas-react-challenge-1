export default function Description(props) {
  return (
    <div className='container'>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
