import React from "react";
import { users } from "../data/users";
import User from "../components/User";
import Comments from "../components/Comments";
import "../styles/post.css";

function Post(props) {
  const author = users.find(user => {
    return user.id === props.userId;
  });

  return (
    <div className="post" key={props.title}>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      {User(author)}
      {Comments(props)}
    </div>
  );
}

export default Post;
