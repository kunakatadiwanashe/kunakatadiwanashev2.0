import { useState } from "react";
import Aside from "./Aside";
import Header from "./Header";

function ParentComponent() {
  const [asideOpen, setAsideOpen] = useState(false);

  const handleAsideOpen = () => {
    setAsideOpen(!asideOpen);
  };

  return (
    <>
      <Header handleAsideOpen={handleAsideOpen} />
      <Aside asideOpen={asideOpen} handleAsideOpen={handleAsideOpen} />
    </>
  );
}

export default ParentComponent;