import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostList.css';
import CommentList from '../CommentList/CommentList';

const PostList = ({ posts }) => (
  <ul className="posts-list">
    {posts.map(post => (
      <li key={post.id} className="posts-list__item">
        <Post {...post} />
        <CommentList {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PostList;
