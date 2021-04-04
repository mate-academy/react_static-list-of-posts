import React from 'react';
import './comment.scss';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { CommentShape } from '../../propTypes';

export const CommentList = ({ list }) => (
  <div className="comment-list">
    {list.map(comments => (
      <div className="comment-list__comment" key={comments.id}>
        <Comment {...comments} />
      </div>
    ))}
  </div>
);

CommentList.propTypes = {
  list: PropTypes.arrayOf(CommentShape).isRequired,
};
