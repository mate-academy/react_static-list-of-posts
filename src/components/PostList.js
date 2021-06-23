import React from 'react';
import PropTypes from 'prop-types';

import { Post } from './Post';

export const PostList = ({ twits }) => (
  <>
    {twits.map(twit => (
      <div key={twit.id}>
        <Post {...twit} />
      </div>
    ))}
  </>
);

PostList.propTypes = {
  twits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
