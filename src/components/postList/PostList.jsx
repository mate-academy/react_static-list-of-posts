import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../post';

export function PostList({ data }) {
  return (
    data.map(post => (
      <div className="card-body w-75 m-2">
        <Post {...post} key={data.id} />
      </div>
    ))
  );
}

PostList.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};
