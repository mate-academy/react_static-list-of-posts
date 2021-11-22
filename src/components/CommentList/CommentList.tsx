import { useState } from 'react';
import { Comment } from '../../Types/Comment';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  const [setIsShownCommentsList, setCount] = useState(false);

  return (
    <ul className="comments">
      <button
        type="button"
        onClick={() => {
          setCount(!setIsShownCommentsList);
        }}
      >
        Comments of the user
      </button>
      {setIsShownCommentsList && (
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
