import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: CommentInterface[],
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="commentList">
    {comments.map(comment => (
      <li className="commentList__item" key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
