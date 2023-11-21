import { useState } from "react";

import MainForm from "./home/MainForm";
import NavBar from "../components/navigation/NavBar";

import { INFO_ROUTE } from "../variables/Routes";

function MainPanel() {
  const [activePanel, setActivePanel] = useState<string>(INFO_ROUTE);
  return (
    <div className="flex h-[600px] w-[65%] bg-white rounded-lg shadow-2xl">
      <NavBar activePanel={activePanel} navigateTo={setActivePanel} />
      <MainForm activePanel={activePanel} navigateTo={setActivePanel} />
    </div>
  );
}

export default MainPanel;
