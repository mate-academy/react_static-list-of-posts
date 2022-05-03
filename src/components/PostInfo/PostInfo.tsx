import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

interface Props {
  post: PostWithUser;
}

export const PostInfo:React.FC<Props> = ({ post }) => (
  <>
    <h2>{post.title}</h2>
    <div>{post.body}</div>
    {post.user && (
      <UserInfo user={post.user} />
    )}
    <CommentList comments={post.comments} />
  </>
);
