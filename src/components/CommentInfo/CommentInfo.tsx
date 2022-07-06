import './CommentInfo.scss';

type Props = {
  name: string;
  email: string;
  body: string;
};

export const CommentInfo: React.FC<Props> = ({ name, email, body }) => {
  return (
    <>
      <p data-cy="comment-name">
        <strong>{'Name: '}</strong>
        {name}
      </p>

      <p data-cy="comment-email">
        <strong>{'Email: '}</strong>
        {email}
      </p>

      <p data-cy="comment-body">
        <strong>{'Comment: '}</strong>
        {body}
      </p>
    </>
  );
};
