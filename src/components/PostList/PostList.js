import React from 'react';
import './PostList.css';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

export const PostList = ({ posts }) => (
  <ul className="posts">
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
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
      user: PropTypes.shape(),
      comments: PropTypes.arrayOf(),
    }).isRequired,
  ).isRequired,
};
