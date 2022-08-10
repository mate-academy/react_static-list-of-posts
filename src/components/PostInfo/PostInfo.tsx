import { FullPost } from '../../types/fullpost';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Post = {
  post: FullPost,
};

export const PostInfo: React.FC<Post> = ({ post }) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {post.title}
        </h3>

        <UserInfo user={post.user} />
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <CommentList comments={post.comment} />
    </div>
  </>
);
