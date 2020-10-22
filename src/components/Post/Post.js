import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

import { CommentList } from '../CommentList';
import { User } from '../User';

export const Post = ({ title, body, user, comments }) => (
  <>
    <h3 className="post__title">{title}</h3>
    <p className="post__body">{body}</p>
    <CommentList comments={comments} />
    <User {...user} />
  </>
);

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  user: PropTypes.shape(),
  comments: PropTypes.arrayOf(PropTypes.shape()),
}.isRequired;
