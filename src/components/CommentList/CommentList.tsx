import { Comment } from '../types';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export type Props = {
  preparedComments: Comment[];
};

export const CommentList: React.FC<Props> = ({ preparedComments }) => {
  return (
    <div className="commentList">
      {preparedComments.map(comment =>
        <CommentInfo
          key={comment.id}
          comment={comment}
        />
      )}
    </div>
  );
};
