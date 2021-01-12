import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { Types } from './types';

export const PostList = ({ posts }) => (
  <>
    {posts.map(post => (
      <li className="App__list" key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(Types).isRequired,
};
