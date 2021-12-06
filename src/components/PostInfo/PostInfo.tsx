import { UserInfo } from '../UserInfo/UserInfo';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import { PreparedPosts } from '../../types/PreparedPosts';
import './PostInfo.scss';

export const PostInfo: React.FC<PreparedPosts> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <div className="info">
      <h2 className="info__title">{title}</h2>
      <p className="info__body">{body}</p>
    </div>
    {user && (
      <div className="info__user user">
        <UserInfo {...user} />
      </div>
    )}
    <CommentInfo comments={comments} />
  </>
);
