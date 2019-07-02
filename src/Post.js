import React from "react";

const Post = ({ post }) => {
  return (
    <>
      <td>{post.title}</td>
      <td>{post.body}</td>
    </>
  );
};

export default Post;
