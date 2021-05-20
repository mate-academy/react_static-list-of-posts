import React from 'react';
import PropTypes from 'prop-types';

import Post from '../Post/Post';

const PostList = ({ posts, users, comments }) => (
  <div>
    {posts.map(post => (
      <Post
        key={post.id}
        {...post}
      />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
    }),
  ).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default PostList;
