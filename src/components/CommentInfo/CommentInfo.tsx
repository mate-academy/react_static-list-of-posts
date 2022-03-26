import { IComment } from '../../types/Types';

import './CommentInfo.scss';

type Props = {
  comment: IComment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
    <div>

      <p className="comment__name">
        Name: &nbsp;
        { comment.name}
      </p>

      <p className="comment__body">
        {comment.body}
      </p>

      <p className="comment__email">
        Email: &nbsp;
        {comment.email}
      </p>

    </div>
  );
};
