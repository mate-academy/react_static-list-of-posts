import React from 'react';
import PropTypes from 'prop-types';
import './Commentlist.scss';

import { Comment } from '../comment/Comment';
import { CommentType } from '../types';

export const Commentlist = ({ postComments }) => (
  <ul className="comment-list">
    <p><strong>Post comments</strong></p>
    {postComments.map(comment => (
      <li key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

Commentlist.propTypes = {
  postComments: PropTypes.arrayOf(CommentType).isRequired,
};
