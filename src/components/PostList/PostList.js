import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';

import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <div className="App__postlist postlist">
    {posts.map(post => (
      <div className="postlist__post post" key={post.id}>
        <Post {...post} />
      </div>
    ))}
    ;
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
