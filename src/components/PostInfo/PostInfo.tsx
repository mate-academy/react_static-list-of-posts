import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({
  post: {
    title,
    user,
    body,
    comment,
  },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      {' Posted by  '}

      {user && (
        <UserInfo user={user} />
      )}
    </div>

    <p className="PostInfo__body">{body}</p>

    {(comment && comment.length > 0)
      ? <CommentList comments={comment} />
      : (
        <>
          <hr />

          <b>No comments yet</b>
        </>
      )}

  </div>
);
