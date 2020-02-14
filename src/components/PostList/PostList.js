import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

export const PostList = ({ posts }) => (
  <div className="post-list">
    {posts.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.number,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      address: PropTypes.shape({
        city: PropTypes.string,
      }).isRequired,
    }),
  })).isRequired,
};
