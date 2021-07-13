import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import './Post.css';
import { TypeUser, TypeComment } from '../../types';

const Post = ({ post }) => (
  <div className="post">
    <p className="post_title">{post.title.toUpperCase()}</p>
    <p className="post__body">{post.body}</p>
    <User user={post.user} />
    <CommentList comments={post.comments} />
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: TypeUser,
    comments: TypeComment,
  }).isRequired,
};

export default Post;
