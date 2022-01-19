import { Post } from '../types/types';
import { CommentList } from './CommentList';
import { UserInfo } from './UserInfo';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="card-body">
    <h2 className="card-header shadow-lg p-3 mb-5 bg-white rounded text-center">
      <strong>{post.title}</strong>
    </h2>
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <h5 className="card-subtitle mb-2 text-muted shadow-sm p-3 mb-5 bg-white rounded">
        {`"${post.body}"`}
      </h5>
      {post.user && (
        <UserInfo user={post.user} />
      )}
    </div>
    <CommentList comments={post.comments} />
  </div>
);
