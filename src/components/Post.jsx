import React from 'react';

import PropTypes from 'prop-types';

import { User } from './User';
import { Comment } from './Comment';

export const Post = ({ title, body, user, comments }) => (
  <div className="card">
    <div className="card__post post">
      <h2 className="post__title">
        {title}
      </h2>
      <p className="post__text">
        {body}
      </p>
      <User {...user} />
    </div>

    <div className="card__comment comment">
      <ul className="comment__list">
        {comments.map(comment => <Comment {...comment} key={comment.id} />)}
      </ul>
    </div>
  </div>
);

Post.defaultProps = {
  comments: [],
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.object,
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
