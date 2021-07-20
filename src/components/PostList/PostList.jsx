import React from 'react';
import PropTypes from 'prop-types';
import { Post, PostTypes } from '../Post';

export const PostList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
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
  posts: PropTypes.arrayOf(PropTypes.shape(PostTypes)).isRequired,
};
