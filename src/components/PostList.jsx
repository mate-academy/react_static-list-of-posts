import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostList({ posts }) {
  return (
    <ul className="posts">
      {posts.map(post => (
        <li className="post" key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </ul>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostList;
