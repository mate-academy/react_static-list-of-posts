import './PostInfo.scss';

import { UserInfo } from '../UserInfo';
import { PreparedPost } from '../../types/prepearedPost';
import { CommentList } from '../CommentList';

type Props = {
  post: PreparedPost
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    user,
    title,
    body,
    comments,
  } = post;

  return (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{title}</h3>

          {user && <UserInfo user={user} />}
        </div>

        <p className="PostInfo__body">
          {body}
        </p>

        <hr />
        <CommentList comments={comments} />
      </div>
    </>
  );
};
