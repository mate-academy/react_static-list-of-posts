import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import './Post.css';

const Post = ({ postInfo }) => (
  <div className="post">
    <User person={postInfo.user} />
    <h2 className="post__heading">{postInfo.title}</h2>
    <p className="post__text">{postInfo.body}</p>
    <CommentList comments={postInfo.comments} />
  </div>
);

Post.propTypes = {
  postInfo: PropTypes.shape({
    user: PropTypes.shape.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf.isRequired,
  }).isRequired,
};

export default Post;
