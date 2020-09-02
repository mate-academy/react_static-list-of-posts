import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import './Post.scss';

export const Post = ({ title, body, user, replies }) => (
  <li>
    <article className="article">
      <h2 className="article__title">{title}</h2>
      <p className="article__text">{body}</p>
      <User {...user} />
      <CommentList replies={replies} />
    </article>
  </li>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }),
  }).isRequired,
  replies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
