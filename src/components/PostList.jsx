import React from 'react'
import PropTypes from 'prop-types';
import Post from './Post'


const PostList = ({currentPosts}) => (
  <div>
    {currentPosts.map(post => (
      <Post currentPost={post}/>
    ))}
  </div>
)

PostList.propTypes = {
  currentPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList