import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div>
    {post.user && <UserInfo user={post.user} />}
    <p><strong>{`Post title: ${post.title}`}</strong></p>
    <p>{`Post body: ${post.body}`}</p>
    {(post.comments.length > 0) && <CommentList comments={post.comments} />}
  </div>
);
