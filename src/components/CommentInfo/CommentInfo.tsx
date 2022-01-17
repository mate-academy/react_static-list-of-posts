type Props = {
  comment: PostComment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <span className="comment__name">{comment.name}</span>
    <span className="comment__body">{comment.body}</span>
    <span className="comment__email">{comment.email}</span>
  </>
);
