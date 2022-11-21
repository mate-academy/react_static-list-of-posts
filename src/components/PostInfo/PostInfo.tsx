import { UserInfo } from '../UserInfo';
import commentsFromServer from '../../api/comments';
import usersFromServer from '../../api/users';
import { Post } from '../../types/post';
import { CommentList } from '../CommentList';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    userId,
    title,
    body,
    id,
  } = post;

  const user = usersFromServer.find(curUser => curUser.id === userId);
  const comments = commentsFromServer
    .filter(curComment => curComment.postId === id);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          {user && <UserInfo dataType="post" user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />
      {comments.length === 0
        ? <b data-cy="NoCommentsMessage">No comments yet</b>
        : <CommentList comments={comments} />}
    </div>
  );
};
