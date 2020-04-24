import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import './Post.css';

const Post = ({ title, body, user, userComments }) => (
  <div className="post">
    <h3 className="post__title">
      {title}
    </h3>
    <p className="post__body">
      {body}
    </p>
    <User {...user} />
    <CommentList userComments={userComments} />
  </div>
);

export default Post;

Post.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  body: PropTypes.bool.isRequired,
  userComments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
