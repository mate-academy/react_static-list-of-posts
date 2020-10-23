import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import PostShape from '../../shapes/PostShape';

const PostList = ({ posts }) => (
  posts.map(post => (
    <div>
      <Post {...post} key={post.id} />
    </div>
  ))
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};

export default PostList;
