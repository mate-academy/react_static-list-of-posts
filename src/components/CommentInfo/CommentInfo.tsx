import { useState } from 'react';

import { Comment } from '../../Types/Comment';

export const CommentInfo: React.FC<Comment> = ({ name, body }) => {
  const [setIsShownCommentsList, setCount] = useState(false);

  return (
    <div>
      <p>
        {name}
        {' '}
        <button
          type="button"
          onClick={() => {
            setCount(!setIsShownCommentsList);
          }}
        >
          read more
        </button>
      </p>
      {setIsShownCommentsList && (
        <p>
          {body}
        </p>
      )}
    </div>
  );
};
