import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h1 className="Post__title">
      {post.title}
    </h1>
    <h3 className="Post__text">
      {post.body}
    </h3>
    {post.user && <UserInfo user={post.user} />}
    {post.comments.length && <CommentList comments={post.comments} />}
  </>
);
