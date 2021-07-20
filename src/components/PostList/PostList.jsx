import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import './PostList.css';

export const PostList = ({ posts }) => (
  <ul className="postlist">
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
  posts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
