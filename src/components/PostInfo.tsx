import { CommentList } from './CommentList';
import { UserInfo } from './UserInfo';
import { Post } from '../types/Post';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const { title, body } = post;
  const { user, comments } = post;

  return (
    <div>
      <span className="post-div__title">
        <i>Post by </i>
        <UserInfo user={user} />
        <br />
        <strong>{title}</strong>
      </span>
      <br />

      <p className="post-div__content">{body}</p>

      <div className="post-div__comments">
        <CommentList comments={comments} />
      </div>
    </div>
  );
};
