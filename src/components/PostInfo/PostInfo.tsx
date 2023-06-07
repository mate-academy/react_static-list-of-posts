import './PostInfo.scss';
import { PostInfoData } from '../../types/PostInfoData';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: PostInfoData;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
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

        {comments.length
          ? (<CommentList comments={comments} />)
          : (<b data-cy="NoCommentsMessage">No comments yet</b>)}
      </div>
    </>
  );
};
