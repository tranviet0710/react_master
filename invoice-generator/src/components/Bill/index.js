import Input from "../Input";

const Bill = (props) => {
  return (
    <div className="col-span-5">
      <label
        htmlFor="tax"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.name}
      </label>
      <Input placeholder={props.who} />
      <Input placeholder="Email address" />
      <Input placeholder="Billing address" />
    </div>
  );
};
export default Bill;
