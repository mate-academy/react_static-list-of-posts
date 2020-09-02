import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ title, body, user, commentsList }) => (
  <>
    <h3 className="title">{title}</h3>
    <p className="text">{body}</p>
    <User {...user} />
    <CommentList comments={commentsList} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  commentsList: PropTypes.arrayOf(PropTypes.objectOf),
};

Post.defaultProps = {
  user: {},
  commentsList: [],
};
