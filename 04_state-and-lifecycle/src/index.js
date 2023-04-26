import React from "react";
import { createRoot } from "react-dom/client";
import "semantic-ui-css/semantic.min.css"; //import css of Semantic UI framework
import Season from "./Season";
import Spinner from "./Spinner";

const container = document.getElementById("root");
const root = createRoot(container);

// Class component
class App extends React.Component {
  /* initialize state - two ways */

  // 1. in constructor (longer way to initialize state)
  // constructor(props) {
  //   // call parent class constructor to access the parent's properties and methods
  //   super(props);
  //   // initialize state
  //   this.state = { lat: null, errorMessage: "" };
  // }

  // 2. short way to initialize state
  state = {
    lat: null,
    errorMessage: "",
    time: new Date().toLocaleTimeString(),
  };

  intervalID = 0;

  /* lifecycle methods */

  // good place to do data loading
  componentDidMount() {
    console.log("The component was rendered to the screen");
    //get current location
    window.navigator.geolocation.getCurrentPosition(
      //sucess callback
      (position) => {
        //update state (always with setState!!!!!!!!)
        this.setState({ lat: position.coords.latitude });
        //this.state.lat = position.coords.latitude; // NEVER DO THIS!!!!!!!!
      },
      //error callback
      (err) => this.setState({ errorMessage: err.message })
    );

    //get local time
    this.intervalID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }
  // good to do more data loading when state/props are changed
  componentDidUpdate() {
    console.log("The component was just updated and rerendered");
  }
  // good place to do cleanup (especially for external non react stuff)
  componentWillUnmount() {
    clearInterval(this.intervalID);
    console.log("The component will be no longer shown");
  }

  //helper method
  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      //pass state as props
      return <Season lat={this.state.lat} />;
    }
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return <Spinner message="Waiting..." />;
  }

  /* render */
  render() {
    return <div className="content">{this.renderContent()}</div>;
  }
}

root.render(<App tab="home" />);
