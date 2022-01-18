type Props = {
  comment: Commentary,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="content is-small">
    <h3 className="titlle is-3">{comment.name}</h3>
    <p>{comment.body}</p>
    <a href={`mailto:${comment.email}`}>{comment.email}</a>
  </div>
);
