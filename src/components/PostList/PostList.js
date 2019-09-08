import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';
import Post from '../Post/Post';

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map(post => <Post post={post} key={post.id} />)}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
