import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ user, cmts }) => (
  <>
    <h3>post</h3>
    <User
      {...user}
    />
    <CommentList
      cmts={cmts}
    />
  </>
);

Post.propTypes = {
  user: PropTypes.objectOf(PropTypes.object).isRequired,
  cmts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
