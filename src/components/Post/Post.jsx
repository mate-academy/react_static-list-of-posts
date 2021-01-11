import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ user, cmts, body, title }) => (
  <>
    <h2>{title}</h2>
    <User
      {...user}
    />
    <p>{body}</p>
    <CommentList
      cmts={cmts}
    />
  </>
);

Post.propTypes = {
  user: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
      PropTypes.object.isRequired,
    ]),
  ).isRequired,
  cmts: PropTypes.arrayOf(PropTypes.object).isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
