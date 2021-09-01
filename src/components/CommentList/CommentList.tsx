import React from 'react';
import { Comment } from '../../Types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <div className="list__comment-list comment-list">
      {comments.map(comment => (
        <div key={comment.id} className="comment-list__item">
          <CommentInfo comments={comment} />
        </div>
      ))}
    </div>
  );
};
