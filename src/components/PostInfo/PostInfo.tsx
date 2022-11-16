import './PostInfo.scss';

import { CommentList } from '../CommentList';
import { NoComments } from '../NoComments';

import { User } from '../../types/User';
import { Comment } from '../../types/Comment';
import { UserInfo } from '../UserInfo';

interface Props {
  title: string,
  body: string,
  user: User | undefined,
  comments: Comment[]
}

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        {user && (
          <p>
            {' Posted by  '}
            <UserInfo name={user.name} />
          </p>
        )}
      </div>
      <p className="PostInfo__body">
        {body}
      </p>

      {!comments.length
        ? <NoComments />
        : <CommentList comments={comments} />}
    </div>
  );
};
