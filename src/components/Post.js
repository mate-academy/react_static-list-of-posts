import React from 'react';
import PropTypes from 'prop-types';

import { User } from './User';
import { CommentList } from './CommentList';

export const Post = ({ title, body, user, commentList }) => (
  <div className="post">
    <div>{`Title: ${title}`}</div>
    <div>{body}</div>
    <div><User humans={user} /></div>
    <div><CommentList list={commentList} /></div>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
  }).isRequired,
  commentList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
