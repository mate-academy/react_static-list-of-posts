import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({
  post,
}) => (
  <>
    <h1 className="title">
      {post.title}
    </h1>
    <p className="body">
      {post.body}
    </p>
    <div>
      {post.user && <UserInfo user={post.user} />}
    </div>
    <div>
      <CommentList comments={post.comments} />
    </div>
  </>
);
