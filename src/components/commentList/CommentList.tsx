import { FC } from 'react';
import { Comments } from '../types/comments';
import { CommentInfo } from '../commentInfo/CommentInfo';

interface Props {
  comments: Comments[];
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
