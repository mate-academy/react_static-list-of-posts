import { Comment } from './Interfaces';
// import { Comment } from '../../react-app-env';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments = [] }) => (
  <>
    {comments.map(comment => (
      <>
        <CommentInfo comment={comment} />
      </>
    ))}
  </>
);
