import React, { Component } from "react";
import axios from "axios";
import OfficeContainer from "./OfficeContainer";
class AcumenOfficeList extends Component {
  constructor() {
    super();
    this.state = {
      offices: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://5ea5cbca2d86f00016b46276.mockapi.io/api/offices")
      .then((response) => {
        console.log(response);
        this.setState({ offices: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }

  render() {
    return (
      <div>
        {this.state.offices.map((office) => (
          <OfficeContainer office={office} />
        ))}
      </div>
    );
  }
}

export default AcumenOfficeList;
