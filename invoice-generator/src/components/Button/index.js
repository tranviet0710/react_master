const Button = (props) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 w-full rounded"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
