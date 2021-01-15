import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import { userTypes, commentTypes } from '../../types';

export const Post = ({
  title,
  body,
  user,
  comments,
}) => (
  <div className="post">
    <h2 className="post__title">{title}</h2>
    <p className="post__description">{body}</p>

    <User user={user} />

    <h3>Comments:</h3>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: userTypes.isRequired,
  comments: PropTypes.arrayOf(commentTypes).isRequired,
};
