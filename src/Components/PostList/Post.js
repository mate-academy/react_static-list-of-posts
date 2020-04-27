import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentsList/CommentList ';

export const Post = ({ title, body, user, comments }) => (
  <li className="post__item">
    <article>
      <h2 className="post__title">
        {title}
      </h2>
      <User {...user} />
      <p className="post__body">
        {body}
      </p>
    </article>
    <CommentList comments={comments} />
  </li>
);

Post.defaultProps = {
  comments: [],
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({}).isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.object,
  ),
};
