import { useState } from "react";
import Panels from "./components/Panels";
import SidePanel from "./components/SidePanel";
import { ActiveItems } from "./types";

function App() {
  const [active, setActive] = useState<ActiveItems>(ActiveItems.Dashboard);

  const handleClick = (label: ActiveItems) => {
    setActive(label);
  };
  return (
    <>
      <SidePanel active={active} handleClick={handleClick} />
      <Panels />
    </>
  );
}

export default App;
