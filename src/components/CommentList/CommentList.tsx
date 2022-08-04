import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/comment';

type Props = {
  commentsList: Comment[];
};

export const CommentList: React.FC<Props> = ({ commentsList }) => (
  <>
    <div className="CommentList">
      {
        commentsList.map(commentItem => (
          <CommentInfo comment={commentItem} key={commentItem.id} />
        ))
      }
    </div>
  </>
);
