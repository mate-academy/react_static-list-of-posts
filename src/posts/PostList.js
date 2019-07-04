import React from "react";

import comments from "../api/comments";
import posts from "../api/posts";
import users from "../api/users";
import CommentList from "../comments/CommentList";
import Post from "../posts/Post";
import User from "../user/User";
import "../posts/Post.css";

const PostList = props => {
  const findUser = userId => {
    return users.find(user => user.id === userId);
  };

  const findComments = postId => {
    return comments.filter(comment => comment.postId === postId);
  };

  return (
    <div className="postlist">
      {posts.map(post => (
        <div className="post" key={post.id}>
          <Post post={post} />
          <User user={findUser(post.userId)} />
          <CommentList comments={findComments(post.id)} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
