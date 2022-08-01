import React from "react";
import { createRoot } from "react-dom/client";
import Comment from "./Comment";
// a library to generate massive amounts of fake (but realistic) data for testing and development
import { faker } from "@faker-js/faker";

const container = document.getElementById("root");
const root = createRoot(container);

const App = () => {
  return (
    <div className="ui container comments">
      <Comment
        author="Danny"
        timeAgo="Today at 7:00PM"
        content="Hello!"
        avatar={faker.image.avatar()}
      />
      <Comment
        author="Ben"
        timeAgo="Today at 6:45PM"
        content="Nice!"
        avatar={faker.image.avatar()}
      />
      <Comment
        author="John"
        timeAgo="Today at 3:10AM"
        content="Good morning!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

root.render(<App tab="home" />);
