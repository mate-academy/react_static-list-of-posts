type Props = {
  name: string,
  body: string,
  email: string,
};

export const CommentInfo: React.FC<Props> = ({
  name,
  body,
  email,
}) => (
  <div className="card-content comments">
    <div className="card-content">{body}</div>
    <div className="is-flex is-flex-direction-column subtitle">
      <a href="#user">{`User: ${name}`}</a>
      <a href="#user">{`Email: ${email}`}</a>
    </div>
  </div>
);
