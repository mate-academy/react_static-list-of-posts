import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import './PostList.css';

export const PostList = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <li key={post.id} className="post-list__item post">
        <Post post={post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    post: PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
      user: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        address: PropTypes.shape({
          street: PropTypes.string,
          city: PropTypes.string,
        }),
      }),
      comments: PropTypes.shape({
        comment: PropTypes.shape({
          name: PropTypes.string,
          body: PropTypes.string,
          email: PropTypes.string,
        }),
      }),
    }),
  })).isRequired,
};
