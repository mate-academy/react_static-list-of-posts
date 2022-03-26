import React from 'react';

import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../types/Comment';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="list">
    <h3 className="list__caption">
      Comments &#9660;
    </h3>
    {comments.map((comment) => {
      return (
        <ul key={comment.id}>
          <CommentInfo comment={comment} />
        </ul>
      );
    })}
  </div>
);
