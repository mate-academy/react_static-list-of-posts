import { Post, Comment } from '../../types';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';
import { CommentInfo } from '../CommentInfo/CommentInfo';

interface Props {
  post: Post;
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo" data-cy="post-info">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title" data-cy="post-title">
        {post.title}
      </h3>
      {post.user && <UserInfo user={post.user} />}
    </div>
    <p className="PostInfo__body">{post.body}</p>

    {post.comments && post.comments.length > 0 ? (
      <div className="PostInfo__comments">
        {post.comments.map((comment: Comment) => (
          <CommentInfo key={comment.id} comment={comment} />
        ))}
      </div>
    ) : (
      <div data-cy="NoCommentsMessage">No comments yet</div>
    )}
  </div>
);
