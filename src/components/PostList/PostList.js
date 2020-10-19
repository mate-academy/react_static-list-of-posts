import React from 'react';
import PropTypes from 'prop-types';

import Post from '../Post/Post';
import { PostShape } from '../Post/PostShape';

import styles from './PostList.module.css';

const PostList = ({ posts }) => (
  <ul className={styles.postList}>
    {posts.map(post => (
      <Post post={post} />
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};

export default PostList;
