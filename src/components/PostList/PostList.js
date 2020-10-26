import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

import './postList.scss';

const PostList = ({ posts }) => (
  <div className="post-list">
    {posts.map(post => <Post post={post} key={post.id} />)}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(Post.propTypes).isRequired,
};

export { PostList };
