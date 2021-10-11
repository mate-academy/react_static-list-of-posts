import { Comment } from '../../types';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentList__list">
    {comments.map(
      comment => (
        <li
          key={comment.id}
          className="CommentList__item"
        >
          <CommentInfo
            comment={comment}
          />
        </li>
      ),
    )}
  </ul>
);
