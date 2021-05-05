import React from 'react';
import User from './User';
import CommentList from './CommentList';

function Post({ comments, post, users }) {
  return (
      <div key={post.id}>
        <h1>{post.title}</h1>
        <span>{post.body}</span>
        <User user={users.find(
          user => post.userId === user.id,
        )}
        />
        <CommentList postId={post.id} comments={comments} />
      </div>
    )
}

export default Post;
