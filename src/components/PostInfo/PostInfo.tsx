import './PostInfo.scss';
import { PostsT } from '../../types';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  info: PostsT
};

export const PostInfo: React.FC<Props> = ({ info }) => {
  const {
    title,
    body,
    user,
    comments,
  } = info;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}

          {user
            ? <UserInfo user={user} />
            : 'Anonymus'}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>
      {comments?.length
        ? comments.map(comment => (
          <CommentList key={comment.id} comments={comment} />
        ))
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </div>
  );
};
