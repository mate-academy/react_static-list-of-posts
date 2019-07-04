import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ post }) => (
  <li className="post_list">
    <User user={post.user} />
    <p className="post_title">
      <b>Title</b>
      {' '}
      {post.title}
    </p>
    <p className="post_body">{post.body}</p>
    <CommentList comments={post.comments} />
  </li>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.object,
    comments: PropTypes.object,
  }).isRequired,
};

export default Post;
