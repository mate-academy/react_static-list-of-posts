import React from 'react';
import { Comment } from '../Comment/Comment';
import { CommentListShape } from '../Shapes/CommentListShape';

import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="comments">
    {
      comments.map(comment => (
        <Comment {...comment} key={comment.id} />
      ))
    }
  </div>
);

CommentList.propTypes = CommentListShape;
