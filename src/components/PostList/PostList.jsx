import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';
import { Post } from '../Post';

export function PostList({ arrOfObj }) {
  return (
    <div className="App-list">
      {arrOfObj.map(obj => (
        <div className="post" key={obj.id}>
          <Post {...obj} />
        </div>
      ))}
    </div>
  );
}

PostList.propTypes = {
  arrOfObj: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
