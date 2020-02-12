import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './postList.css';

const PostList = ({ data }) => (
  <ul>
    {data.map(item => (
      <li key={item.id} className="list__item">
        <Post {...item} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PostList;
