import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import { PostTypes } from '../../types';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <ul className="container">
    {posts.map(post => (
      <li key={post.id} className="post">
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
