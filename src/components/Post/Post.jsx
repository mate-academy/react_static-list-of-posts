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
      {/* <ul className="commentlist">
        {replies.map(comment => (
          <CommentList key={comment.id} {...comment} />
        ))}
      </ul> */}
    </article>
  </li>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({}).isRequired,
  replies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
