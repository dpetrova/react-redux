import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

/*
// Funcional component
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    //sucess callback
    (position) => console.log(position),
    //error callvack
    (err) => console.log(err)
  );
  return <div>Location: </div>;
};
*/

// Class component
class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      //sucess callback
      (position) => console.log(position),
      //error callvack
      (err) => console.log(err)
    );

    return <div>Location: </div>;
  }
}

root.render(<App tab="home" />);
