import React from 'react';
import PropTypes from 'prop-types';
import './PostList.css';
import { Post } from '../Post';

export function PostList({ posts }) {
  return (
    <ul className="post__list">
      {posts.map(post => (
        <li className="post__item" key={post.id}>
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
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
