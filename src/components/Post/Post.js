import React from 'react';
import propTypes, { object } from 'prop-types';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import './Post.scss';

const Post = ({ post }) => (
  <>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <User user={post.user} />
    <CommentList comments={post.comments} />
  </>
);

Post.propTypes = {
  post: propTypes.shape({
    title: propTypes.string.isRequired,
    body: propTypes.string.isRequired,
    user: propTypes.object.isRequired,
    comments: propTypes.arrayOf(object).isRequired,
  }).isRequired,
};

export default Post;
