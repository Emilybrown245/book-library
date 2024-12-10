import { useState } from "react";
import Button from 'react-bootstrap/Button';

function Collapsible({ children, contentDescriptor }) {
  const [isHidden, setIsHidden] = useState(false);

  function toggleIsHidden() {
    setIsHidden(!isHidden);
  }

  return (
    <div>
     <Button variant="light" onClick={toggleIsHidden}>{
        isHidden ? (<span className="button-text">Show</span>) : (<span className="button-text">Hide</span>)
      } <span className="button-text">{contentDescriptor}</span></Button>
      {isHidden ? null : children}
    </div>
  );
}

export default Collapsible;
