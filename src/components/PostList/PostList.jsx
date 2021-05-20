import React from 'react';
import Post from "../Post/Post";
import PropTypes from 'prop-types';

function PostList({posts}) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Post {...post}/>
        </li>
      ))}
    </ul>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default PostList;
