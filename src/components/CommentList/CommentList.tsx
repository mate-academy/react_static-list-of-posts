import { CommentInfo } from '../CommentInfo';

import { Comment } from '../../types/Comment';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList = ({ comments }: Props) => (
  <div className="CommentList">
    {comments.map(comment => {
      return <CommentInfo comment={comment} key={comment.id} />;
    })}
  </div>
);
