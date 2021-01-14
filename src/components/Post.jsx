import React from 'react';
import CommentList from './CommentList';
import User from './User';
import { PostType } from '../types';

const Post = ({ title, body, user, comment }) => (
  <>
    <h1 className="title">
      <span>&quot;</span>
      {title[0].toUpperCase() + title.slice(1)}
      <span>&quot;</span>
    </h1>

    <p className="text">
      {body[0].toUpperCase() + body.slice(1)}
    </p>
    <div><User {...user} /></div>
    <div className="comments">
      <span className="comments__title">Comments:</span>
      <CommentList comments={comment} />
    </div>
  </>
);

Post.propTypes = PostType.isRequired;

export default Post;
