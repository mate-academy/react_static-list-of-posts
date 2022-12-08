import { Post } from '../../types/post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo: React.FC<Post> = ({
  title,
  body,
  user,
  comments,
}: Post) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {' Posted by  '}
        <UserInfo {...user} />
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />

    { comments.length > 0
      ? <CommentList comments={comments} />
      : <b data-cy="NoCommentsMessage">No comments yet</b>}
  </div>
);
