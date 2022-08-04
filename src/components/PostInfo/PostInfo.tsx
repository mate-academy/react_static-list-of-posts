import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({
  post: {
    title,
    user,
    body,
    comments,
  },
}) => {
  return (
    <>
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {' Posted by  '}

        {user && (
          <UserInfo user={user} />
        )}
      </div>

      <p className="PostInfo__body">{body}</p>

      {comments.length
        ? <CommentList comments={comments} />
        : (
          <>
            <hr />

            <b>No comments yet</b>
          </>
        )}
    </>
  );
};
