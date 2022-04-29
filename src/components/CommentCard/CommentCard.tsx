import { Comment } from '../../types/Comment';

import './CommentCard.scss';

type Props = {
  comment: Comment | null;
};

export const CommentCard: React.FC<Props> = ({ comment }) => {
  if (!comment) {
    return (<></>);
  }

  const {
    name: title,
    email,
    body: content,
  } = comment;

  return (
    <div className="CommentCard">
      <h3 className="CommentCard__title" data-cy="comment-name">
        {title}
      </h3>

      <div className="CommentCard__body" data-cy="comment-body">
        <p className="CommentCard__content">
          {content}
        </p>

        <p className="CommentCard__email" data-cy="comment-email">
          {email}
        </p>
      </div>
    </div>
  );
};
