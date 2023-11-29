import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post;
};

export const PostInfo = ({
  post: {
    title,
    user,
    userId,
    body,
    comments,
  },
} : Props) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      {user && <UserInfo key={userId} user={user} />}
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {comments.length
      ? <CommentList comments={comments} />
      : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}

  </div>
);
