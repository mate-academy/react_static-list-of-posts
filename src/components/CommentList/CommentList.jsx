import React from 'react';

import { TypeComments } from '../../types';

import './CommentList.scss';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div className="content__comments">
    <u>Comments:</u>
    {comments.map(comment => (
      <Comment {...comment} key={comment.id}/>
    ))}
  </div>
);

CommentList.propTypes = TypeComments.isRequired;
