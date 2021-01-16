import React from 'react';
import PropTypes from 'prop-types';
import { PostTypes } from '../../types';
import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <>
    <ul>
      {posts.map(list => (
        <li className="post-list" key={list.id}>
          <Post {...list} />
        </li>
      ))}
    </ul>
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostTypes).isRequired,
};
