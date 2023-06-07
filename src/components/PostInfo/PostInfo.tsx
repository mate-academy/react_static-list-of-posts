import { FullPostData } from '../../types/FullPostData';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

interface PostInfoProps {
  post: FullPostData;
}

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  const {
    user,
    title,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && <UserInfo user={user} />}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <CommentList comments={comments} />
    </div>
  );
};
