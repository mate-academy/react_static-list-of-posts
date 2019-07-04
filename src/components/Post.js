/* eslint-disable react/prop-types */
import React from 'react';
import SingleUser from './User';
import CommentList from './CommentList';

const SinglePost = ({ post }) => (
  <div className="post">
    <SingleUser userId={post.userId} />
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <div className="comments">
      <p className="comemnts-title">Comments:</p>
      <CommentList comments={post.comments} />
    </div>
  </div>
);

export default SinglePost;
