type Props = {
  comment: {
    name: string;
    email: string;
    body: string;
  };
};

export const CommentInfo = ({ comment: { name, email, body } }: Props) => {
  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>

        {' by '}

        <a className="CommentInfo__email" href={`mailto:${email}`}>
          {email}
        </a>
      </div>

      <div className="CommentInfo__body">{body}</div>
    </div>
  );
};
