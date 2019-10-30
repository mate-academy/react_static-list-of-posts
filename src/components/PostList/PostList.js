import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

function PostList({ posts }) {
  return (
    <div className="ui card">
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
