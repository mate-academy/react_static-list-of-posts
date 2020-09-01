import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { CommentShape } from '../PropTypes';

import './CommentList.css';

export const CommentList = ({ comments }) => (
  <ul className="commentList">
    {(comments.map(item => (
      <li className="comment" key={item.id}>
        <Comment {...item} />
      </li>
    )))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(CommentShape)).isRequired,
};
