import { Comment } from '../../types/types';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name,
    email,
    body,
  } = comment;

  return (
    <>
      <h3 className="comment-info__name">
        {name}
      </h3>

      <span className="comment-info__email">
        {email}
      </span>

      <p className="comment-info__content">
        {body}
      </p>
    </>
  );
};
