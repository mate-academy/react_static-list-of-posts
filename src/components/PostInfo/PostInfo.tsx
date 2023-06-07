import { FullPostData } from '../../types/FullPostData';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

interface PostInfoProps {
  postinfo: FullPostData;
}

export const PostInfo: React.FC<PostInfoProps> = ({ postinfo }) => {
  const {
    user,
    title,
    body,
    comments,
  } = postinfo;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && <UserInfo postUser={user} />}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <CommentList commentList={comments} />
    </div>
  );
};
