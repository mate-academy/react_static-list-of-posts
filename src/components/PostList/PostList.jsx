import React from 'react';
import './PostList.scss';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

function PostList({ posts }) {
  return (
    <div className="posts">
      {posts.map(post => (
        <Post
          key={post.id}
          {...post}
        />
      ))}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default PostList;
