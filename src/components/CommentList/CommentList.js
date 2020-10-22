import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { CommentShape } from '../../shapes/CommentShape';

import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="comments">
    <h3 className="comments__title">
      {comments.length}
      {' Comments'}
    </h3>
    <ul className="comments__list list">
      {
        comments.map(comment => (
          <li className="list__item" key={comment.id}>
            <Comment {...comment} />
          </li>
        ))
      }
    </ul>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentShape).isRequired,
};
