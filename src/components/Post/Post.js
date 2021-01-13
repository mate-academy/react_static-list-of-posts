import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from '../CommentList/CommentList';
import { User } from '../User/User';
import './Post.scss';

export const Post = ({ title, body, user, postComments }) => (
  <div className="post">
    <h2 className="post__title">{title}</h2>
    <br />
    <p className="post__body">{body}</p>
    <br />
    <User {...user} />
    <h3>Comments:</h3>
    <CommentList comm={postComments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,

  }).isRequired,
  postComments: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
