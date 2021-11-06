import { Comment } from '../types';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export type Props = {
  prepComments: Comment[];
};

export const CommentList: React.FC<Props> = ({ prepComments }) => {
  return (
    <div className="commentList">
      {prepComments.map(comm => <CommentInfo comm={comm} />)}
    </div>
  );
};
