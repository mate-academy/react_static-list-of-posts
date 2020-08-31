import React from 'react';
import './PostList.css';

import PropTypes from 'prop-types';

import { Post } from '../Post/Post';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <Post
        key={post.id}
        data={post}
      />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      userNick: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      userEmail: PropTypes.string.isRequired,
      userCity: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};
