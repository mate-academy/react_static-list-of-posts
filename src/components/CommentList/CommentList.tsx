import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[]
};

export const CommentList:React.FC<Props> = ({ comments }) => (
  <div>
    <h3 className="title is-4 comments-title">Comments:</h3>
    {comments.map(comment => (
      <CommentInfo key={comment.id} {...comment} />
    ))}
  </div>
);
