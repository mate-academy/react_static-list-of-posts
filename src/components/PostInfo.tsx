import { Post } from '../types/Post';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h4 className="post__title">
      {post.title}
    </h4>
    <p className="post__body">
      {post.body}
    </p>
    {(post.user) && <UserInfo user={post.user} />}

    <CommentList comments={post.comments} />
  </>
);
