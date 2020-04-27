import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

const Post = ({ post }) => (
  <li className="posts__item">
    <div>
      <h3 className="posts__title">{post.title}</h3>
      <p className="posts__text">
        {post.body}
      </p>
    </div>
    <User {...post.user} />
    <CommentList {...post} />
  </li>
);

Post.propTypes = {
  post: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default Post;
