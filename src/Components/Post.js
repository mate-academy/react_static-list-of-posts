import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ post }) => (
  <div className="post">
    <ul>
      <li>{post.title}</li>
      <li>{post.body}</li>
    </ul>
    <p>
      <User user={post.user} />
    </p>
    <CommentList comments={post.comments} />
  </div>
);

Post.propTypes = { post: PropTypes.objectOf(PropTypes.any).isRequired };
export default Post;
