import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import './Post.scss';
import { commentType, postType, usersType } from '../../types';

const Post = ({ post, user, comment }) => (
  <div className="post">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <User user={user} />
    <h3>Comments:</h3>
    <CommentList commentList={comment} />
  </div>
);

Post.propTypes = {
  post: postType.isRequired,

  user: usersType.isRequired,

  comment: PropTypes.arrayOf(commentType).isRequired,
};

export default Post;
