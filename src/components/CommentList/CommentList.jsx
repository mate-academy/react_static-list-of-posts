import React from 'react';
import './CommentList.scss';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { CommentShape } from '../../types';

export const CommentList = ({ comments }) => (
  <ul className="Comment-list">
    {comments.map(listItem => (
      <li key={listItem.id} className="Comment-list__comment">
        <Comment {...listItem} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentShape).isRequired,
};
