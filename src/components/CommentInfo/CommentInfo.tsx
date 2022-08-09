type Props = {
  name: string,
  email: string,
  description: string,
};

export const CommentInfo: React.FC<Props> = ({
  name,
  email,
  description,
}) => (
  <>
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{name}</strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {description}
    </div>
  </>
);
