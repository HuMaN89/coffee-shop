import "./SearcPanel.css";
import { Button, ButtonGroup } from "react-bootstrap";
const SearcPanel = () => {
  return (
    <div className="search-panel">
      <label htmlFor="search">
        Lookiing for
        <input type="text" placeholder="start typing here..." />
      </label>
      <span>Or filter</span>
      <ButtonGroup aria-label="Basic example">
        <Button variant="outline-secondary">Brazil</Button>{" "}
        <Button variant="outline-secondary">Kenya</Button>{" "}
        <Button variant="outline-secondary">Columbia</Button>{" "}
      </ButtonGroup>
    </div>
  );
};

export default SearcPanel;
