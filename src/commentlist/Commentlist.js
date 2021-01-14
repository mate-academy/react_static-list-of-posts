import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../comment/Comment';
import { commentsType } from '../types/propTypesCollection';

export const CommentList = ({ commentList }) => (
  <div className="comment-list">
    {commentList.map(remark => (
      <Comment remark={remark} key={remark.id} />
    ))}
  </div>
);

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(commentsType).isRequired,
};
