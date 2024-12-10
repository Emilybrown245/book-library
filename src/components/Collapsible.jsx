import { useState } from "react";

function Collapsible({ children, contentDescriptor }) {
  const [isHidden, setIsHidden] = useState(false);

  function toggleIsHidden() {
    setIsHidden(!isHidden);
  }

  return (
    <div>
      <button onClick={toggleIsHidden}>{`${
        isHidden ? "Show" : "Hide"
      } ${contentDescriptor}`}</button>
      {isHidden ? null : children}
    </div>
  );
}

export default Collapsible;
