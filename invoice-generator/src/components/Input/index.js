const Input = (props) => {
  const update = (event) => {
    props.update(event.target.name, event.target.value);
  };
  return (
    <input
      value={props.value}
      name={props.name}
      required
      placeholder={props.placeholder}
      className="bg-gray-50 w-full p-2 mb-3"
      onChange={update}
    ></input>
  );
};
export default Input;
