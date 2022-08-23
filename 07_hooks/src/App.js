import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend javascript framework",
  },
  {
    title: "What is Vue?",
    content: "Vue is a new and promising frontend javascript framework",
  },
  {
    title: "What is Angular?",
    content: "Angular is an old frontend javascript framework",
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
      <Search />
    </div>
  );
};

export default App;
