import React from 'react';

import './CommentList.scss';
import { Comment } from '../types/Comment';
import { CommentInfo } from '../CommentsInfo/CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <h3 className="post__comments-title">Comments:</h3>

    {comments.map(comment => (
      <div className="comment" key={comment.id}>
        <CommentInfo {...comment} />
      </div>
    ))}
  </>
);
