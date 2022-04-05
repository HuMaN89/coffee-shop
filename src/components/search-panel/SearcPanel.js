import { Component } from "react";
import "./SearcPanel.css";
import { Button, ButtonGroup } from "react-bootstrap";
class SearcPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onUpdateProps = (e) => {
    const term = e.target.value;
    this.setState({
      term,
    });
    this.props.onUpdateProps(term);
  };

  render() {
    return (
      <div className="search-panel">
        <label htmlFor="search">
          Lookiing for
          <input
            type="text"
            placeholder="start typing here..."
            onChange={this.onUpdateProps}
            value={this.state.term}
          />
        </label>
        <span>Or filter</span>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-secondary">Brazil</Button>{" "}
          <Button variant="outline-secondary">Kenya</Button>{" "}
          <Button variant="outline-secondary">Columbia</Button>{" "}
        </ButtonGroup>
      </div>
    );
  }
}

export default SearcPanel;
