import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ post }) => (
  <li className="post__item">
    <div className="post__article">
      <h3 className="post__title">{post.title}</h3>
      <p className="post_text">{post.body}</p>
    </div>
    <User {...post.user} />
    <hr />
    <CommentList comments={post.comments} />
  </li>
);

Post.propTypes = {
  post: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })).isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
};

export default Post;
