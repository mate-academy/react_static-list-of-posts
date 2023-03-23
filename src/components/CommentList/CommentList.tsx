import { Posts } from '../../types/Posts';
import { CommentInfo } from '../CommentInfo';

type Props = Pick<Posts, 'comments'>;

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  );
};
