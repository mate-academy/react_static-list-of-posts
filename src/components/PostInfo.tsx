import { Post } from '../types/Post';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <span className="post__title">
      {post.title}
    </span>
    <br />
    <span className="post__body">
      {post.body}
    </span>
    <br />
    {(post.user) && <UserInfo user={post.user} />}

    <CommentList comments={post.comments} />
  </>
);
