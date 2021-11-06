import { Comment } from '../../types/typesdef';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name,
    body,
    email,
  } = comment;

  return (
    <>
      <h4>{name}</h4>
      <p>{body}</p>
      <div>{`Email: ${email}`}</div>
    </>
  );
};
