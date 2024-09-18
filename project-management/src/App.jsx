import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoSelectedProject from "./components/NoSelectedProject";
import { main } from "./tailwind-config";

import { useState } from "react";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const handleStartAddProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handleCancelAddProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };
  return (
    <main className={main}>
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {projectState.selectedProjectId === null ? (
        <NewProject onCancelAddProject={handleCancelAddProject} />
      ) : (
        <NoSelectedProject onStartAddProject={handleStartAddProject} />
      )}
    </main>
  );
}

export default App;
