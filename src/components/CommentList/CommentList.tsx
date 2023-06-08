import { FC } from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comments';

interface Props {
  comments: Comment[];
}

export const CommentList: FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
