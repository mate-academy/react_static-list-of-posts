import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { Post } from '../../Types/Posts';

export const PostInfo: React.FC<Post> = ({
  title, body, user, comments,
}) => (
  <>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      {' Posted by  '}

      {user ? (<UserInfo {...user} />) : null}
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {comments ? (
      <CommentList comments={comments} />
    ) : (<b>No comments yet</b>)}
  </>
);
