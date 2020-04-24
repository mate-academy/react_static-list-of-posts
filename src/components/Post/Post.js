import React from 'react';
import './Post.css';
import PropTypes from 'prop-types';
import CommentList from '../CommentList/CommentList';
import User from '../User/User';

const Post = ({ post }) => (
  <div className="Post">
    <h2>
      {post.title}
    </h2>

    <p>
      {post.body}
    </p>

    <User {...post.user} />

    <CommentList comments={post.comments} />
  </div>
);

export default Post;

Post.propTypes = {
  post: PropTypes.objectOf.isRequired,
};
