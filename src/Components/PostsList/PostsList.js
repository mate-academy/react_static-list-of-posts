import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostsList.scss';

const PostsList = ({ posts }) => (
  <div className="container">
    {posts.map(post => <Post {...post} key={post.id} />)}
  </div>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf({
    post: PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      comments: PropTypes.string.isRequired,
      user: PropTypes.objectOf({
        name: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default PostsList;
