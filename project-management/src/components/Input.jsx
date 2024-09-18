import { paragraph1, label, input1, input2 } from "../tailwind-config";

const Input = ({ label, textarea, ...props }) => {
  return (
    <p className={paragraph1}>
      <label className={label}>{label}</label>
      {textarea ? (
        <textarea {...props} className={input1} />
      ) : (
        <input {...props} className={input1} />
      )}
    </p>
  );
};
export default Input;
