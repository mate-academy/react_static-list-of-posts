import React from 'react';
import PropTypes from 'prop-types';
import { UserType, CommentType } from '../types';
import { User } from './User';
import { CommentList } from './CommentList';

export const Post = ({ id, body, title, author, comments }) => (
  <div className="App__post-body">
    <div className="App__post-header">
      <h2 className="App__title">
        Post
        {' '}
        {id}
        :
        {' '}
        <i>{title}</i>
      </h2>
      <article className="App__article">{body}</article>
      <div>
        <User {...author} />
      </div>
    </div>

    <ul>
      <h4>Comments:</h4>
      <CommentList comments={comments} />
    </ul>
  </div>
);

Post.propTypes = {
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.shape(UserType).isRequired,
  comments: PropTypes.arrayOf(CommentType).isRequired,
};
