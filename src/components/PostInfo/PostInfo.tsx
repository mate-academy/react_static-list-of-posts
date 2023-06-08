import { FullPostData } from '../../types/FullPostData';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

interface Props {
  post: FullPostData;
}

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    user,
    title,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo box has-background-white is-rounded">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title title is-4">{title}</h3>

        {user && <UserInfo user={user} />}
      </div>

      <p className="PostInfo__body mb-3">
        {body}
      </p>

      <CommentList comments={comments} />
    </div>
  );
};
