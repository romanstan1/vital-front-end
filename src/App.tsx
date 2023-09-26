import { useState } from "react";
import SidePanel from "./components/SidePanel";
import MainContent from "./components/MainContent";
import { ActiveItems } from "./types";

function App() {
  const [active, setActive] = useState<ActiveItems>(ActiveItems.Dashboard);

  const handleClick = (label: ActiveItems) => {
    setActive(label);
  };
  return (
    <>
      <SidePanel active={active} handleClick={handleClick} />
      <MainContent active={active} />
    </>
  );
}

export default App;
