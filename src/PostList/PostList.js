import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

const PostList = ({ preparedPosts }) => (
  <div className="post__list">
    {preparedPosts.map(post => (
      <div className="item" key={post.id}>
        <Post post={post} />
      </div>
    ))}
  </div>
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default PostList;
