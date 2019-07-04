import React from "react";

import PostList from "../posts/PostList";
import "../mainApp/App.css";

const App = props => {
  return (
    <div className="main-div">
      <h1>Static list of posts</h1>
      <PostList />
    </div>
  );
};

export default App;
