import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../user';
import { CommentList } from '../comment-list';

import './Post.scss';

export const Post = ({ title, body, user, comments}) => (
  <div className="post">
    <div className="post__title">
      {title}
    </div>
    <div className="post__body">
      {body}
    </div>
    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  });
