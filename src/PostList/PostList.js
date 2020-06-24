import React from 'react';
import './PostList.css';
import PropTypes from 'prop-types';
import { Post } from './Post/Post';

export const PostList = ({ posts }) => (
  <>
    {posts.map(post => (
      <div className="Post" key={post.id}>
        <Post post={post} />
      </div>
    ))}
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};
