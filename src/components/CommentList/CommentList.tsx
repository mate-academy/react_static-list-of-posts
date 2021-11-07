import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';
import './CommentList.scss';

type Props = {
  postComments: Comment[];
};

export const CommentList: React.FC<Props> = ({ postComments }) => (
  <ul className="Comments">
    {postComments.map((postComment) => (
      <li key={postComment.id} className="Comments__item">
        <CommentInfo commentInfo={postComment} />
      </li>
    ))}
  </ul>
);
