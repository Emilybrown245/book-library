import { useState } from "react";
import Button from 'react-bootstrap/Button';

function Collapsible({ children, contentDescriptor }) {
  const [isHidden, setIsHidden] = useState(false);

  function toggleIsHidden() {
    setIsHidden(!isHidden);
  }

  return (
    <div>
     <Button variant="outline-info" onClick={toggleIsHidden}>{`${
        isHidden ? "Show" : "Hide"
      } ${contentDescriptor}`}</Button>
      {isHidden ? null : children}
    </div>
  );
}

export default Collapsible;
