import React from 'react';
import './Post.scss';
import PropTypes from 'prop-types';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';

const Post = ({ user }) => (
  <div className="post">
    <h2>{ user.title }</h2>
    <p>{user.body}</p>
    <User user={user.user} />
    <CommentList comments={user.comments} />
  </div>
);

Post.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.arrayOf.isRequired,
    comments: PropTypes.arrayOf.isRequired,
  }).isRequired,
};

export default Post;
