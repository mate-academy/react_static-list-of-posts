import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import { Post } from '../../types/Post';

export const PostInfo: React.FC<Post> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <h2>{title}</h2>
    <div>
      {user && <UserInfo {...user} />}
    </div>

    <p>{body}</p>
    <CommentList comments={comments} />
  </>
);
