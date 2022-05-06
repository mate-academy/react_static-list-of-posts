import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const {
    comments,
  } = props;

  return (
    <>
      <span className="comment-info__name" data-cy="comment-name">
        {comments.name}
      </span>
      <p className="comment-info__body" data-cy="comment-body">
        {comments.body}
      </p>
      <a className="comment-info__link" data-cy="comment-email" href={`mailto:${comments.email}`}>Email</a>
    </>
  );
};
