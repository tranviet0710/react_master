const Input = (props) => {
  const updateBill = (event) => {
    props.update(event.target.name, event.target.value);
  };
  return (
    <input
      value={props.value}
      name={props.name}
      required
      placeholder={props.placeholder}
      className="bg-gray-50 w-full p-2 mb-3"
      onChange={updateBill}
    ></input>
  );
};
export default Input;
