import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';
import { CommentType } from '../Types/Types';

export const CommentList = ({ commentList }) => (
  <div className="post__comments">
    {commentList.map(comment => (
      <div key={comment.id}>
        <Comment {...comment} />
      </div>
    ))}
  </div>
);

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(CommentType).isRequired,
};
