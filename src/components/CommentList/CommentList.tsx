import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="comment">
    Comments:
    {comments.map(comment => (
      <div key={comment.id}>
        <CommentInfo comment={comment} />
      </div>
    ))}
  </div>
);
