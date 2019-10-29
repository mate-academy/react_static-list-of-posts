import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

export default function PostList({ fullPosts }) {
  return (
    <div className="posts-list">
      {fullPosts.map(post => <Post post={post} key={post.id} />)}
    </div>
  );
}

PostList.propTypes = {
  fullPosts: PropTypes.instanceOf(Array).isRequired,
};
