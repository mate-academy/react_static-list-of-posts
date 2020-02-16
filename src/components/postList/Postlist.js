import React from 'react';
import PropTypes from 'prop-types';
import Post from '../post/Post';
import './PostList.css';

const PostList = ({ posts }) => (
  <div className="Postlist">
    {posts.map(post => (
      <div className="post" key={post.id}>
        <Post post={post} />
      </div>
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
      user: PropTypes.shape(),
      comments: PropTypes.arrayOf(
        PropTypes.shape(),
      ),
    }).isRequired,
  ).isRequired,
};

export default PostList;
