import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post';

import './ListStyle.scss';

export const PostList = ({ allDataProp }) => (
  <div>
    <ul className="list__style">
      {allDataProp.map(postItem => (
        <li key={postItem.id}>
          <Post {...postItem} />
        </li>
      ))}
    </ul>
  </div>
);

PostList.propTypes = {
  allDataProp: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
};

PostList.defaultProps = {
  allDataProp: [],
};
