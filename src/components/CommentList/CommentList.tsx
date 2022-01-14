import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[] | null;
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  comments && (
    <>
      <h4>Comments:</h4>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <CommentInfo comment={comment} />
          </li>
        ))}
      </ul>
    </>
  )
);
