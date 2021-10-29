import { Comment } from '../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <div>
      {`${comment.name} `}
      <span className="text-italic">
        <b>Email: </b>
        {comment.email}
      </span>
    </div>
    <p>{comment.body}</p>
  </>
);
