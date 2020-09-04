import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostList.scss';

const PostList = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <li className="post-list__item" key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
