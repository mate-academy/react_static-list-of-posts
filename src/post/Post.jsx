import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

import { User } from '../user/User';
import { Commentlist } from '../commentlist/Commentlist';
import { CommentType } from '../types';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <p className="post-title">{title}</p>
    <p className="post-text">{body}</p>
    <User {...user} />
    <Commentlist postComments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(CommentType).isRequired,
};
