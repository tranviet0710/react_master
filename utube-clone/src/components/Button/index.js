const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${props.className}`}
    >
      {props.text}
    </button>
  );
};
export default Button;
