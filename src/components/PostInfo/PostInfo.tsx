import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="ui message">
    {post.user && (
      <UserInfo user={post.user} />
    )}
    <div className="ui piled segment">
      <h4 className="ui header">
        {post.title}
      </h4>
      <p>
        {post.body}
      </p>
    </div>
    <CommentList commentaries={post.commentaries} />
  </div>
);
