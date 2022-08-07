import React from "react";
import { createRoot } from "react-dom/client";
import "semantic-ui-css/semantic.min.css"; //import css of Semantic UI framework
import Season from "./Season";

const container = document.getElementById("root");
const root = createRoot(container);

/*
// Funcional component
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    //sucess callback
    (position) => console.log(position),
    //error callback
    (err) => console.log(err)
  );
  return <div>Location: </div>;
};
*/

// Class component
class App extends React.Component {
  //constructor
  // constructor(props) {
  //   // call parent class constructor to access the parent's properties and methods
  //   super(props);
  //   // initialize state
  //   this.state = { lat: null, errorMessage: "" };
  // }

  // short way to initialize state
  state = { lat: null, errorMessage: "" };

  // lifecycle methods
  componentDidMount() {
    console.log("The component was rendered to the screen");
    //get current location
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //update state (always with setState!!!!!!!!)
        this.setState({ lat: position.coords.latitude });
        //this.state.lat = position.coords.latitude; // DO NOT!!!!!!!!
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  componentDidUpdate() {
    console.log("The component was just updated and rerendered");
  }
  componentWillUnmount() {
    console.log("The component will be no longer shown");
  }

  // render
  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <Season lat={this.state.lat} />;
    }
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return <div>Loading...</div>;
  }
}

root.render(<App tab="home" />);
