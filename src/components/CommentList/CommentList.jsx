import React from 'react';
import PropTypes from 'prop-types';

import './commentList.scss';
import { Comment } from '../Comment/Comment';
import { commentType } from '../../types';

export const CommentList = ({ comments }) => (
  <div className="comment-list">
    <ul className="comment-list__list">
      {comments.map(comment => (
        <li className="comment-list__list-item" key={comment.id}>
          <Comment {...comment} />
        </li>
      ))
      }
    </ul>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(commentType).isRequired,
};
