import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostList.css';
import { TypeUser, TypeComment } from '../../types';

const PostList = ({ posts }) => (
  <div className="postList">
    <ul>
      { posts.map(post => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: TypeUser,
    comments: TypeComment,
  })).isRequired,
};

export default PostList;
