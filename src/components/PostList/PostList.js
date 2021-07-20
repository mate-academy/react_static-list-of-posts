import React from 'react';
import PropTypes from 'prop-types';

import './PostList.scss';

import { Post } from '../Post';
import { PostTypes } from '../PropTypes';

export const PostList = ({ posts }) => (
  <ul className="list">
    {posts.map(post => (
      <li
        key={post.id}
        className="list-group-item item list-group-item-warning"
      >
        <Post
          title={post.title}
          body={post.body}
          user={post.user}
          comments={post.comments}
        />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostTypes).isRequired,
};
