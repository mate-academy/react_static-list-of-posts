import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';
import './PostList.css';

function PostList({ posts }) {
  return (
    <ul className="postList">
      {posts.map(post => <Post key={post.id} post={post} />)}
    </ul>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  })).isRequired,
};

export default PostList;
