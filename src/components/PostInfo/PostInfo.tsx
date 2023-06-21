import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

interface Props {
  post: Post;
}

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && (
          <span className="PostInfo__title--p">
            Posted by
            <span>
              <UserInfo user={user} />
            </span>
          </span>
        )}
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      {comments.length ? (
        <CommentList comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
