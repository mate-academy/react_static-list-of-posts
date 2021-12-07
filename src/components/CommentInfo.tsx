type Props = {
  name: string,
  body: string,
  email: string,
};

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <>
    <p>
      <strong>{'Comment text: '}</strong>
      {body}
    </p>
    <strong>{'User name: '}</strong>
    {name}
    <p>
      <strong>{'Email: '}</strong>
      {email}
    </p>
  </>
);
