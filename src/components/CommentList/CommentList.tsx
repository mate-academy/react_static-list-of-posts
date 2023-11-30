import { CommentListProps } from '../../types/Comment';

import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
