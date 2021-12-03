import { Comment } from '../../../types/types';
import './CommentInfo.scss';

type Props = {
  commentInfo: Comment
};

const CommentInfo: React.FC<Props> = ({ commentInfo }) => {
  const { name, body, email } = commentInfo;

  return (
    <>
      <div className="info__name">
        {name}
      </div>
      <div className="info__body">
        {body}
      </div>
      <div className="info__email">
        {email}
      </div>
    </>
  );
};

export default CommentInfo;
