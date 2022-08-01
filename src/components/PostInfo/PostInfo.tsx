import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { FormattedPost } from '../../Types/FormattedPost';

type Props = {
  post: FormattedPost;
};

export const PostInfo: React.FC<Props> = ({
  post: {
    title,
    user,
    body,
    comments,
  },
}) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {' Posted by  '}

        {user && <UserInfo user={user} />}
      </div>

      <p className="PostInfo__body">{body}</p>

      {comments.length && <CommentList comments={comments} />}
    </div>
  </>
);
