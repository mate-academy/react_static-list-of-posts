import React from 'react';
import PropTypes from 'prop-types';
import { User, propTypesUser } from '../User/User';

export const Post = ({ title, body, user, comments }) => (
  <li className="post">
    <h2>
      <p>{title}</p>
    </h2>
    <p>{body}</p>
    <User {...user} />
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <p>{`Comment: ${comment.name}`}</p>
          <p>{comment.body}</p>
          <p>{comment.email}</p>
        </li>
      ))}
    </ul>
  </li>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape(propTypesUser).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    body: PropTypes.string,
    email: PropTypes.string,
  })).isRequired,
};
