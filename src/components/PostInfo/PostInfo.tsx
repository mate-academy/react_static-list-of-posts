import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

interface Props {
  post: PostWithUser;
}

export const PostInfo:React.FC<Props> = ({ post }) => (
  <>
    <h2 className="Post-item__title">{post.title}</h2>
    <div Post-item__body>{post.body}</div>
    {post.user && (
      <UserInfo user={post.user} />
    )}
    <CommentList comments={post.comments} />
  </>
);
