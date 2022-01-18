import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="content">
    <h2 className="title is-2">{post.title}</h2>
    {post.user
      && <UserInfo user={post.user} />}

    <p>{post.body}</p>
    {post.comments.length !== 0
      && <CommentList comments={post.comments} />}
  </div>
);
