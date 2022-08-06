import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

/*
// Funcional component
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return <div>Location: </div>;
};
*/

// Class component
class App extends React.Component {
  //constructor
  constructor(props) {
    // call parent class constructor to access the parent's properties and methods
    super(props);
    // inittialize state
    this.state = { lat: null, errorMessage: "" };
    //get current location
    window.navigator.geolocation.getCurrentPosition(
      //sucess callback
      (position) => {
        //update state (always with setState!!!!!!!!)
        this.setState({ lat: position.coords.latitude });
        //this.state.lat = position.coords.latitude; // DO NOT!!!!!!!!
      },
      //error callback
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // render
  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return <div>Loading...</div>;
  }
}

root.render(<App tab="home" />);
