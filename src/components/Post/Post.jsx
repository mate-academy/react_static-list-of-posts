import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import './post.scss';

export const Post = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <h2 className="list__title">
      {title}
    </h2>

    <p className="list__body">
      {body}
    </p>

    <div className="list__users">
      <User {...user} />
    </div>

    <div className="list__comments">
      <CommentList comment={comments} />
    </div>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape().isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};
