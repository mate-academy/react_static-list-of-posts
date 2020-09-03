import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import { User } from '../User/User';
import { CommentList } from '../Comment/CommentList';

export const Post = ({ title, body, user, comment }) => (
  <div className="post">
    <User {...user} />
    <h3>{title}</h3>
    <p>{body}</p>
    <ul className="comment">
      {
        comment.map(item => (
          <CommentList key={item.id} {...item} />
        ))
      }
    </ul>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
  comment: PropTypes.arrayOf(
    PropTypes.object,
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
