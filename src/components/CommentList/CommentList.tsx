import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../comment';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul>
    {
      comments.map(comment => (
        <li key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      ))
    }
  </ul>
);
