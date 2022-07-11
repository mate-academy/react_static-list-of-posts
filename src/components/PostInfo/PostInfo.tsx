import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        {post.user && (
          <>
            {' Posted by  '}

            <UserInfo user={post.user} />
          </>
        )}
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      <CommentList comments={post.comments} />
    </div>
  </>
);
