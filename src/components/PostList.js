import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import './PostList.scss';

const PostList = ({ posts }) => (
  <>
    <div className="post__list">
      {posts.map(post => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
