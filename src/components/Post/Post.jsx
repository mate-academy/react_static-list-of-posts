import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';
import './Post.scss';

export const Post = ({ user, comments, title, body }) => (
  <>
    <h2 className="post__title">
      {`Post Title: ${title}`}
    </h2>
    <p className="post__text">
      {body}
    </p>
    <User {...user} />
    <CommentList comments={comments} />
  </>
);

Post.defaultProps = {
  comments: [],
};

Post.propTypes = {
  user: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape()),
};
