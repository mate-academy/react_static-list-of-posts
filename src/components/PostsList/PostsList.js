import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

export const PostsList = ({ posts }) => (
  <div className="postlist">
    {posts.map(post => (
      <Post
        key={post.id}
        {...post}
      />
    ))}
  </div>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          postId: PropTypes.number.isRequired,
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        address: PropTypes.shape({
          street: PropTypes.string.isRequired,
          suite: PropTypes.string.isRequired,
          city: PropTypes.string.isRequired,
          zipcode: PropTypes.string.isRequired,
          geo: PropTypes.shape({
            lat: PropTypes.string.isRequired,
            lng: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};
