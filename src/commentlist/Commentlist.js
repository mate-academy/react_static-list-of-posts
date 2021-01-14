import React from 'react';
import { Comment } from '../comment/Comment';
import { checkPropTypesComments } from '../checkPropTypes/CheckPropTypeComment';

export const CommentList = ({ commentList }) => (
  <div className="comment-list">
    {commentList.map(remark => (
      <Comment remark={remark} key={remark.id} />
    ))}
  </div>
);

CommentList.propTypes = checkPropTypesComments;
