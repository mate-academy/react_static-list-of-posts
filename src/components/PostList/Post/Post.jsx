import React from 'react';
import PropTypes from 'prop-types';
import { CommnentList } from '../../CommentList';
import { User } from '../../User';

import './Post.scss';

export const Post = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <p className="postList__post--title">
      {title}
    </p>
    <p className="postList__post--text">
      {body}
    </p>
    <User {...user} />
    <CommnentList comments={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
