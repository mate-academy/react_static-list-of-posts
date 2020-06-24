import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostList.css';

const PostList = ({ preparedPosts }) => (
  <div className="posts__list">
    {preparedPosts.map(preparedPost => (
      <Post {...preparedPost} key={preparedPost.id} />
    ))}
  </div>
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string,
    comment: PropTypes.array,
    userId: PropTypes.number,
    title: PropTypes.string,
    user: PropTypes.object,
  })).isRequired,
};

export default PostList;
