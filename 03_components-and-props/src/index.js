import React from "react";
import { createRoot } from "react-dom/client";
import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";
// a library to generate massive amounts of fake (but realistic) data for testing and development
import { faker } from "@faker-js/faker";

const container = document.getElementById("root");
const root = createRoot(container);

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comment
          author="Danny"
          timeAgo="Today at 7:00PM"
          content="Hello!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="Ben"
          timeAgo="Today at 6:45PM"
          content="Nice!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="John"
          timeAgo="Today at 3:10AM"
          content="Good morning!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

root.render(<App tab="home" />);
