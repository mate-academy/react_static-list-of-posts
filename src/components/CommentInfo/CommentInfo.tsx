interface Props {
  comment: Comment;
}

export const CommentInfo:React.FC<Props> = ({ comment }) => (
  <>
    <h4>{comment.name}</h4>
    <div>{comment.body}</div>
    <strong>{comment.email}</strong>
  </>
);
