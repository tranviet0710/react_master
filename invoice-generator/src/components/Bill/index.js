import Input from "../Input";

const Bill = (props) => {
  const bill = props.bill;
  return (
    <div className="col-span-5">
      <label
        htmlFor="tax"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {props.name}
      </label>
      <Input
        name="who"
        placeholder={props.who}
        value={bill.who}
        update={props.updateBill}
      />
      <Input
        name="email"
        placeholder="Email address"
        value={bill.email}
        update={props.updateBill}
      />
      <Input
        name="address"
        placeholder="Billing address"
        value={bill.address}
        update={props.updateBill}
      />
    </div>
  );
};
export default Bill;
