import { useState } from 'react';
import { Comment } from '../../Types/Comment';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  const [isShownCommentsList, setIsShownCommentsList] = useState(false);

  return (
    <ul className="comments">
      <button
        type="button"
        onClick={() => {
          setIsShownCommentsList(!isShownCommentsList);
        }}
      >
        Comments of the user
      </button>
      {isShownCommentsList && (
        <>
          {comments.map((comment: Comment) => (
            <li key={comment.id} className="comments__list">
              <CommentInfo {...comment} />
            </li>
          ))}
        </>
      )}
    </ul>
  );
};
