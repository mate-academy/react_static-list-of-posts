import React from 'react';
import { commentShape } from '../../types';

export const Comment = ({ commentObj }) => (
  <>
    <h4>{commentObj.name}</h4>
    <p>{commentObj.body}</p>
    <p>{commentObj.email}</p>
  </>
);

Comment.propTypes = {
  commentObj: commentShape.isRequired,
};
