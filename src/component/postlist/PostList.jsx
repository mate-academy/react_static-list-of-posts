import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Post } from '../post';
import './PostList.css';

export const PostList = ({ list }) => {

  return (
    <ul className="posts">
      {list.map(postContent => (
        <li key={postContent.id}>
          <Post {...postContent} />
        </li>
      ))}
    </ul>
  );
};

PostList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
};

PostList.defaultProps = {
  list: [],
};
