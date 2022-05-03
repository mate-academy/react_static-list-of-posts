import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo: React.FC<Post> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <h2>{title}</h2>
    <div>{user && <UserInfo {...user} />}</div>
    <p>{body}</p>
    <CommentList comments={comments} />
  </>
);
