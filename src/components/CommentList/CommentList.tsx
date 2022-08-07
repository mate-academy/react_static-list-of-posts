import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../Types/Comments';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <div className="CommentInfo" key={comment.id}>
        <CommentInfo {...comment} />
      </div>
    ))}
  </div>
);
