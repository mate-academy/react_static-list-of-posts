import React from 'react';
import User from './User';
import CommentList from './CommentList';

function Post(props) {
  const post = props.postItem;
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <User userId = {post.userId}/>
      <CommentList id={post.id}/>
    </article>
  )
}

export default Post;
