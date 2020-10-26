import React from 'react';
import { PostPropTypes } from '../PropTypes/PostPropTypes';
import { User } from '../User';
import { CommentList } from '../CommentList';
import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <article className="post">
    <div className="post__heading">
      <span className="post__author">
        <User {...user} />
      </span>
      <h3 className="post__title">
        {title}
      </h3>
    </div>
    <p className="post__text">
      {body}
    </p>
    <div className="post__comments_heading">
      Comments:
    </div>
    <CommentList comments={comments} />
  </article>
);

Post.propTypes = PostPropTypes;
