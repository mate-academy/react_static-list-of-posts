import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import { PreparedPost } from '../types/PreparedPost';

export const PostInfo: React.FC<PreparedPost> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <h2 className="post__title">{title}</h2>
    <div>
      {user && <UserInfo {...user} />}
    </div>

    <p className="post__body">{body}</p>
    <CommentList comments={comments} />
  </>
);
