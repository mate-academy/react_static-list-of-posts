import { FC } from 'react';

import { Comment } from '../../types';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

interface Props {
  comments: Comment[];
}

export const CommentList: FC<Props> = ({ comments }) => {
  return (
    <div className="Comments">
      <h2 className="Comments__title">Comments</h2>
      <ul className="Comments__list">
        {comments?.length && comments.map((comment) => (
          <li key={comment.id} className="Comments__item">
            <CommentInfo comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
};
