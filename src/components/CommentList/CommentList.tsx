import CommentInfo from './CommentInfo/CommentInfo';
import { Comment } from '../../types/types';
import './CommentList.scss';

type Props = {
  commentList: Comment[] | null
};

const CommentList: React.FC<Props> = ({ commentList }) => (
  <ul className="comment-list">
    {commentList?.map(comment => (
      <li className="comment-list__info">
        <CommentInfo commentInfo={comment} />
      </li>
    ))}
  </ul>
);

export default CommentList;
