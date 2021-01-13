import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import './Post.scss';
import { CommentType, PostType, UsersType } from '../../types';

const Post = ({ post, user, comments }) => (
  <div className="post">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <User user={user} />
    <CommentList commentList={comments} />
  </div>
);

Post.propTypes = {
  post: PostType.isRequired,
  user: UsersType.isRequired,
  comments: PropTypes.arrayOf(CommentType).isRequired,
};

export default Post;
