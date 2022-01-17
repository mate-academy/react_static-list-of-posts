import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo:React.FC<Props> = ({ post }) => (
  <>
    <h2 className="Post-item__title">{post.title}</h2>
    <div className="Post-item__body">{post.body}</div>
    {post.user && (
      <UserInfo user={post.user} />
    )}
    <CommentList comments={post.comments} />
  </>
);
