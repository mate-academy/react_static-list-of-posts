import { Posts } from '../../types/Posts';
import { CommentInfo } from '../CommentInfo';

type Props = Pick<Posts, 'comments'>;

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="CommentList">
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <CommentInfo comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
};
