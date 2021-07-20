import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import { PostType } from '../ListTypes';
import './PostList.css';

export const PostList = ({ posts }) => (
  <ul className="container">
    {posts.map(post => (
      <li key={post.id} className="card">
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
  posts: PropTypes.arrayOf(PostType).isRequired,
};
