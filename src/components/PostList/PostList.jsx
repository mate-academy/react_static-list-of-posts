import React from 'react';
import PropTypes from 'prop-types';

import { Post, postType } from '../Post';

export const PostList = ({ preparedforPosting }) => (
  <div className="PostList">
    <ul>
      {preparedforPosting.map(item => (
        <li key={item.id}>
          <Post {...item} />
        </li>
      ))}
    </ul>
  </div>
);

PostList.propTypes = {
  preparedforPosting: PropTypes.arrayOf(postType).isRequired,
};
