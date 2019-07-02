import React from "react";

import comments from "./api/comments";
import posts from "./api/posts";
import users from "./api/users";
import PostList from "./PostList";
import "./App.css";

const App = props => {
  return (
    <div>
      <h1>Static list of posts</h1>
      <PostList users={users} comments={comments} posts={posts} />
    </div>
  );
};

export default App;
