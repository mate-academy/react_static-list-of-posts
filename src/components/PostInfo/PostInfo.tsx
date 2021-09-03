import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comment,
  } = post;

  return (
    <>
      <div className="post__info">
        <h1>PostInfo:</h1>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      {user && <UserInfo user={user} />}
      {comment && <CommentList comment={comment} />}
    </>
  );
};
