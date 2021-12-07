import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  commentInfo: Comment,
};

export const CommentInfo:React.FC<Props> = (props) => {
  const { commentInfo } = props;
  const { name, email, body } = commentInfo;

  return (
    <li className="commentInfo" key="comment.id">
      <strong>
        {name}
      </strong>
      {` (${email})`}
      <p>
        {body}
      </p>
    </li>
  );
};
