import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post }) => (
  <article key={post.id} className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      {post.user && <UserInfo user={post.user} />}
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />
    {post.comments.length
      ? <CommentList comments={post.comments} />
      : <b data-cy="NoCommentsMessage">No comments yet</b>
    }
  </article>
);
