import React from 'react';
import './PostList.css';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

const PostList = ({ allPostsInformation }) => (
  <ul className="PostList">
    {allPostsInformation.map(el => (
      <li className="PostList__item">
        <Post post={el} key={el.id} />
      </li>
    ))}
  </ul>
);

export default PostList;

PostList.propTypes = {
  allPostsInformation: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
