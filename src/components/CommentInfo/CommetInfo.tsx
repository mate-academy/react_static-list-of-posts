type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <div className="content">
      <span className="author">{comment.email}</span>
      <div className="metadata">
        <span className="date">{comment.name}</span>
      </div>
      <div className="text">
        {comment.body}
      </div>
    </div>
  </div>
);
