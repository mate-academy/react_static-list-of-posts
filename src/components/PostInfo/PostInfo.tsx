import commentsFromServer from '../../api/comments';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

interface PostInfoProps {
  post: Post;
}

export const PostInfo = ({ post }: PostInfoProps) => {
  const { title, user, body } = post;

  return (
    <>
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && <UserInfo user={user} />}
      </div>

      <p className="PostInfo__body">{body}</p>

      <CommentList commentsFromServer={commentsFromServer} />
    </>
  );
};
