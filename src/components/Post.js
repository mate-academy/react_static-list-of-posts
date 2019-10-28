import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ post }) => (
  <tr>
    <User user={post.user} />
    <td>{post.title}</td>
    <td>{post.body}</td>
    <CommentList comments={post.comments} />
  </tr>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    user: PropTypes.object,
  }).isRequired,
};

export default Post;
