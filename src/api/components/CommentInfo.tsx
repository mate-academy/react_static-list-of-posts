type Props = {
  comment: PostComment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment-section">
    <div className="comment-section--name">
      {comment.name}
    </div>
    <div className="comment-section--body">
      {comment.body}
    </div>
    <div className="comment-section--email">
      {comment.email}
    </div>
  </div>
);
