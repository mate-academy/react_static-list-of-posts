type Props = {
  comment: PostComment,
};

export const CommentInfo: React.FC<Props> = ({
  comment: {
    name,
    body,
    email,
  },
}) => (
  <div className="card-content comments">
    <div className="card-content">{body}</div>
    <div className="
      is-flex
      is-flex-direction-column
      is-size-6
      has-text-weight-medium"
    >
      <a href="#user">{`User: ${name}`}</a>
      <a href="#user">{`Email: ${email}`}</a>
    </div>
  </div>
);
