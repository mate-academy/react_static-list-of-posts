import React from 'react';

import { Comment } from '../types/Comment';

type Props = {
  userComment: Comment,
};

export const CommentInfo:React.FC<Props> = (props) => {
  const { userComment } = props;
  const { name, body, email } = userComment;

  return (
    <ul className="list__user-comment">
      <li className="list__user-comment-name">
        {name}
      </li>
      <li className="list__user-comment-email">
        {email}
      </li>
      <li className="list__user-comment-body">
        {body}
      </li>
    </ul>

  );
};
