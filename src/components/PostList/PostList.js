import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostList.css';
import { postListShape } from '../Shapes/PostListShape';

const PostList = ({ preparedPosts }) => (
  <div className="posts__list">
    {preparedPosts.map(preparedPost => (
      <Post {...preparedPost} key={preparedPost.id} />
    ))}
  </div>
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(postListShape).isRequired,
};

export default PostList;
