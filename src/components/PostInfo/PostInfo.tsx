import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

interface Props {
  posts: Post;
}

export const PostInfo: React.FC<Props> = ({ posts }) => {
  const {
    title,
    body,
    user,
    comments,
  } = posts;

  return (
    <div className="post__info">
      <h2 className="post__title">{title}</h2>
      <div className="post__body">{body}</div>
      {user && (
        <UserInfo user={user} />
      )}
      {comments && (
        <CommentList comments={comments} />
      )}
    </div>
  );
};
