import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';
import Post from '../Post/Post';

const PostList = ({ posts }) => (
  <ul className="postList">
    {
      posts.map(post => (<li key={post.id}><Post postInfo={post} /></li>))
    }
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default PostList;
