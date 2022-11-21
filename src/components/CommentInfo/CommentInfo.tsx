import { Comment } from '../../types/comment';
import { UserInfo } from '../UserInfo';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name,
    body,
  } = comment;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>

        {' by '}

        <UserInfo dataType="comment" user={comment} />
      </div>

      <div className="CommentInfo__body">
        {body}
      </div>
    </div>
  );
};
