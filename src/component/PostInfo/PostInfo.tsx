import { Post } from '../../types/Types';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="user">
    <h2 className="user__title">{post.title}</h2>
    <p>{post.body}</p>
    {post.user && <UserInfo user={post.user} />}
    <CommentList comments={post.comments} />
  </div>
);
