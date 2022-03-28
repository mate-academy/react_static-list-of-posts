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
  <>
    <p>
      <strong>
        Title:
        {' '}
      </strong>
      {name}
    </p>

    <p>
      {' '}
      {`"${body}"`}
    </p>

    <p>
      <strong>
        Author email:
        {' '}
      </strong>
      {email}
    </p>
  </>
);
