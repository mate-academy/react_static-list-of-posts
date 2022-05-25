import React from 'react';

type Props = {
  comments: PrepearedPostCommentsUser,
};

const CommentInfo: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <>
      {comments.comment.map(commentProperty => (
        <div key={commentProperty.id}>
          <p>{commentProperty.name}</p>
          <p>{commentProperty.email}</p>
          <p className="comment">{commentProperty.body}</p>
          <br />
          <br />
        </div>
      ))}
    </>
  );
};

export { CommentInfo };
