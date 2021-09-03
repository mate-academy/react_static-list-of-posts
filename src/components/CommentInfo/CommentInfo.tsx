import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const {
    name,
    body,
    email,
  } = props.comment;

  return (
    <>
      <div className="comment-info">
        <p>
          {`Title: ${name}`}
        </p>
        <p>
          {`Email: ${email}`}
        </p>
      </div>

      <div>
        {`Comment: ${body}`}
      </div>
    </>
  );
};
