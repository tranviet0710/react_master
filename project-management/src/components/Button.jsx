import { button1 } from "../tailwind-config";

const Button = ({ children, ...props }) => {
  return (
    <button className={button1} {...props}>
      {children}
    </button>
  );
};
export default Button;
