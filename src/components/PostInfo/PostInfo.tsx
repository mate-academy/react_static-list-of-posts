import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

import { Post } from '../../types/Post';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="list-group-item list-group-item-action item">
      <h2 className="mb-1 title-item">{post.title}</h2>
      <p className="mb-1">{post.body}</p>
      {post.user && (
        <UserInfo user={post.user} />
      )}
      {post.comments && (
        <CommentList comments={post.comments} />
      )}
    </div>
  </>
);
