import { Post } from '../types/Post';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <span className="postTitle">
      {post.title}
    </span>

    <br />
    <span className="postBody">
      {post.body}
    </span>

    {(post.user) && <UserInfo user={post.user} />}

    <CommentList comments={post.comments} />
  </>
);
