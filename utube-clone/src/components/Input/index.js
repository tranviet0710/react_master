const Input = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        placeholder={props.placeholder}
        className="bg-gray-50 w-full p-2 mb-3 border-2 border-black"
      ></input>
    </div>
  );
};
export default Input;
