import React from 'react';

type Props = {
  name: string;
  email: string;
  body: string;
};

export const CommentInfo: React.FC<Props> = ({ name, email, body }) => (
  <div className="commentInfo">
    <p className="commentTitle">{name}</p>
    <div className="commentUser">
      {`Comment by: ${email}`}
    </div>
    <div className="commentText">{body}</div>
  </div>
);
