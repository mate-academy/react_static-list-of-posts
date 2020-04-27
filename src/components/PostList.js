import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import './PostList.css';

const PostList = ({ postList }) => (
  <ul className="post__list">
    {postList.map(postItem => (
      <li className="post__item" key={postItem.id}>
        <Post {...postItem} />
      </li>
    ))}
    ;
  </ul>
);

PostList.propTypes = {
  postList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
