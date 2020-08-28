import React, { Component } from "react";
import "../styles/style.css";
import Confirmation from "./Confirmation";
class OfficeContainer extends Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.handleEvent = this.handleEvent.bind(this);

    this.state = {
      isShown: false,
      show: false,
    };
  }

  show() {
    if (!this.state.isShown) {
      this.setState({
        show: true,
      });
    }
  }
  hide() {
    this.setState({
      isShown: false,
    });
  }

  handleEvent = (childData) => {
    this.setState({ show: false });
    this.setState({
      isShown: childData,
    });
  };

  render() {
    return (
      <div className="m-2">
        <div className="row">
          <div className="col">
            <div className="country">{this.props.office.country}</div>
            {this.state.isShown
              ? this.props.office.city.map((city) => <li>{city}</li>)
              : null}
          </div>

          <div className="col">
            {this.state.isShown ? (
              <button className="show-city" onClick={this.hide}>
                Hide
              </button>
            ) : (
              <button className="show-city" onClick={this.show}>
                Show
              </button>
            )}
          </div>
        </div>
        <Confirmation
          parentShow={this.state.show}
          handle={this.handleEvent}
        />
      </div>
    );
  }
}

export default OfficeContainer;
