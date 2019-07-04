import React from 'react';
import './post-list.scss';

import Post from './Post';
import CommentList from "./CommentList";

const PostList = (props) => {
  return (
    <section className="post-list">
      {props.posts.map(post => (
        <div className="post-wraper" key={post.id}>
          <Post post={post} />
          <CommentList comment={post.commentsToPost} />
        </div>
      ))}
    </section>
  );
};

export default PostList;
