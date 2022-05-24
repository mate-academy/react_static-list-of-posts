import React from 'react';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comments[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="commentList">
    <h3 className="commentList__title">
      Comments list:
    </h3>
    <div className="commentList__block">
      {comments.map((comment) => (
        <CommentInfo
          key={comment.id}
          commentInfo={comment}
        />
      ))}
    </div>
  </div>
);
