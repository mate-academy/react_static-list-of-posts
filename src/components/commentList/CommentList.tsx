import { FC } from 'react';
import { Comment } from '../types/comment';
import { CommentInfo } from '../commentInfo/CommentInfo';
import './CommentList.scss';

interface Props {
  comments: Comment[];
}

export const CommentList: FC<Props> = ({ comments }) => (
  <div className="comments">
    <p className="comments_title">
      Comments
    </p>
    <ul className="comments_list">
      {
        comments.map(comment => (
          <li className="comments_item" key={comment.id}>
            <CommentInfo comment={comment} />
          </li>
        ))
      }
    </ul>
  </div>
);
