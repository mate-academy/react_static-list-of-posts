import React from 'react';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import { PostTypes } from '../Shape/PostTypes';

export const Post = props => (
  <>
    <h1 className="post__title">
      {props.title}
    </h1>
    <p className="post__body">
      {props.body}
    </p>
    <ul className="post__user user">
      <User {...props.user} />
    </ul>
    <CommentList commentList={props.comments} />
  </>
);

Post.propTypes = PostTypes;
