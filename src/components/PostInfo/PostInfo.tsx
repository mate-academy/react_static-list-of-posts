import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import { Posts } from '../../types/Posts';

type Props = {
  todo: Posts;
};

export const PostInfo: React.FC<Props> = ({ todo }) => {
  const {
    title, body, user, comments,
  } = todo;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        {' Posted by  '}

        {user && (
          <UserInfo user={user} />
        )}

      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments.length !== 0
        ? (<CommentList comments={comments} />)
        : (<b>No comments yet</b>)}
    </div>
  );
};
