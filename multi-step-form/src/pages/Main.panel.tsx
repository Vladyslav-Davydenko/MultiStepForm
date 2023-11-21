import { useState } from "react";

import MainForm from "./home/MainForm";
import NavBar from "../components/navigation/NavBar";

import { INFO_ROUTE } from "../variables/Routes";

function MainPanel() {
  const [activePanel, setActivePanel] = useState<string>(INFO_ROUTE);
  return (
    <div className="flex h-[650px] w-[55%] bg-white rounded-md">
      <NavBar activePanel={activePanel} navigateTo={setActivePanel} />
      <MainForm activePanel={activePanel} navigateTo={setActivePanel} />
    </div>
  );
}

export default MainPanel;
