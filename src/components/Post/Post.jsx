import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <div className="post__head">
      <User {...user} />

      <h4 className="title">
        {title}
      </h4>
    </div>
    <p className="text">
      {body}
    </p>

    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
