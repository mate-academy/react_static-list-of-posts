import React from 'react';

import { TypeComment } from '../../types';

import './CommentList.scss';
import { Comment } from '../Comment';

export const CommentList = ({ comment }) => (
  <div className="content__comments">
    <Comment {...comment} />
  </div>
);

CommentList.propTypes = TypeComment.isRequired;
