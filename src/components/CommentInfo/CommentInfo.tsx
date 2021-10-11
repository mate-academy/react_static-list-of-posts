import React from 'react';
import './CommentInfo.scss';

type Props = {
  comment:Comments;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comment } = props;
  const { name, email, body } = comment;

  return (
    <div className="commentBlock">
      <p className="commentTitle">{name}</p>
      <p className="commentAuthor">
        <b>Comment by: </b>
        {email}
      </p>
      <div className="commentText">{body}</div>
    </div>
  );
};
