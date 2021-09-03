import React from 'react';

type Props = {
  comments: PrepearedPostCommentsUser,
};

const CommentInfo: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <>
      {comments.comment.map(x => (
        <div>
          <p>{x.name}</p>
          <p>{x.email}</p>
          <p className="comment">{x.body}</p>
          <br />
          <br />
        </div>
      ))}
    </>
  );
};

export { CommentInfo };
