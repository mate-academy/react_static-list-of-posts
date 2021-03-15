import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';
import Post from '../Post/Post';

const PostList = ({ postsList }) => (
  <div className="postList">
    {
      postsList.map(post => (<Post postInfo={post} />))
    }
  </div>
);

PostList.propTypes = {
  postsList: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default PostList;
