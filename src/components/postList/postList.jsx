import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../posts/posts';
import './postList.scss';

export const PostList = ({ posts }) => (
  <>
    {posts.map(post => (
      <div key={post.id} className="post">
        <Post post={post} />
      </div>
    ))}
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
