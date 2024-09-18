import { aside, heading2Aside, button1 } from "../tailwind-config";
import Button from "./Button";

const ProjectsSidebar = ({ onStartAddProject }) => {
  return (
    <aside className={aside}>
      <h2 className={heading2Aside}>Your Projects</h2>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
    </aside>
  );
};

export default ProjectsSidebar;
