import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import './PostList.css';

const PostList = ({ postList }) => (
  <>
    <h1 className="post__header">List of posts</h1>
    <ul className="post__list">
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
