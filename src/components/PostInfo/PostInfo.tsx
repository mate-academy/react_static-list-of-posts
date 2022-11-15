import './PostInfo.scss';

import commentsFromServer from '../../api/comments';
import { CommentList } from '../CommentList';
import { NoComments } from '../NoComments';

import { User } from '../../types/User';
import { Comment } from '../../types/Comment';
import { UserInfo } from '../UserInfo';

interface Props {
  title: string,
  body: string,
  id: number,
  user: User,
}

const getComments
= (id: number, arr: Comment[]): Comment[] => arr.filter(
  comment => comment.postId === id,
);

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  id,
  user,
}) => {
  const commentsArr = getComments(id, commentsFromServer);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        <p>
          {' Posted by  '}
          <UserInfo name={user.name} />
        </p>
      </div>
      <p className="PostInfo__body">
        {body}
      </p>

      {commentsArr.length < 1
        ? <NoComments />
        : <CommentList comments={commentsArr} />}
    </div>
  );
};
