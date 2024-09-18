import {
  div3,
  heading2,
  img,
  paragraph3,
  paragraph4,
} from "../tailwind-config";
import Button from "./Button";
import NoProjectImage from "../assets/no-projects.png";
const NoSelectedProject = ({ onStartAddProject }) => {
  return (
    <div className={div3}>
      <img src={NoProjectImage} alt="No Project Selected" className={img}></img>
      <h2 className={heading2}>No Project Selected</h2>
      <p className={paragraph3}>
        Select a project or get started with a new one.
      </p>
      <p className={paragraph4}>
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
};
export default NoSelectedProject;
