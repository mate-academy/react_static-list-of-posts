import { useState } from 'react';

import { Comment } from '../../Types/Comment';

export const CommentInfo: React.FC<Comment> = ({ name, body }) => {
  const [isShownCommentsList, setIsShownCommentsList] = useState(false);

  return (
    <div>
      <p>
        {name}
        {' '}
        <button
          type="button"
          onClick={() => {
            setIsShownCommentsList(!isShownCommentsList);
          }}
        >
          read more
        </button>
      </p>
      {isShownCommentsList && (
        <p>
          {body}
        </p>
      )}
    </div>
  );
};
