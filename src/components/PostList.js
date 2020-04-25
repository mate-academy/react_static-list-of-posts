import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ postList }) => (
  <>
    <h1>List of posts</h1>
    <ul>
      {postList.map(post => (
        <Post {...post} key={post.id} />
      ))}
    </ul>
  </>
);

PostList.propTypes = {
  postList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
