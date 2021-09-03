interface Props {
  comment: Comment;
}

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <div className="comment__list">
      <div className="comment__name">{name}</div>
      <div className="comment__body">{body}</div>
      <div className="comment__email">{email}</div>
    </div>
  );
};
