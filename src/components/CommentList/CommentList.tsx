import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';
import { CommentsT } from '../../types';

type Props = {
  comments: CommentsT
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    <CommentInfo comments={comments} />
  </div>
);
