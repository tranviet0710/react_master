import Input from "./Input";
import { div1, menu, button2, button3 } from "../tailwind-config";

const NewProject = ({ onCancelAddProject }) => {
  return (
    <div className={div1}>
      <menu className={menu}>
        <li>
          <button onClick={onCancelAddProject} className={button2}>
            Cancel
          </button>
        </li>
        <li>
          <button className={button3}>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
