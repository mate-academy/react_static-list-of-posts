import React from 'react';
import { Comment } from '../../api/Types/Interfaces';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { name, body, email } = props.comment;

  return (
    <div>
      <div className="postList__commentList__name">
        {name}
      </div>
      <div className="postList__commentList__text">
        {body}
      </div>
      <div className="postList__commentList__email">
        {email}
      </div>
    </div>
  );
};
