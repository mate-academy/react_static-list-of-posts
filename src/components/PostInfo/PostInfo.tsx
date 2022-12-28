import { PostData } from '../../types';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type Props = {
  post: PostData
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        {user && (
          <p>
            {' Posted by  '}
            <UserInfo user={user} />
          </p>
        )}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments && comments.length
        ? (
          <CommentList comments={comments} />
        )
        : (
          <>
            <hr />
            <b data-cy="NoCommentsMessage">
              No comments yet
            </b>
          </>
        )}
    </div>
  );
};
