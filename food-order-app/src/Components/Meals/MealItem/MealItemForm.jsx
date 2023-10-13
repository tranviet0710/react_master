import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <form className="text-center">
      <Input
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <div>
        <button className="text-white rounded-2xl cursor-pointer bg-[#8a2b06] border-2 border-[#8a2b06] border-solid px-4 py-1 font-bold active:bg-[#641e03] active:border-[#641e03]">
          + Add
        </button>
      </div>
    </form>
  );
};
export default MealItemForm;
