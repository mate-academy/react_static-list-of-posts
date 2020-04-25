import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import './Post.css';

export const Post = ({ title, body, user, comments }) => (
  <div className="post">
    <h1 className="post__title">{title}</h1>

    <div className="post__body">
      <p>
        {' '}
&emsp;&emsp;
        {' '}
        {body}
      </p>
    </div>

    <User {...user} />
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
