import { User } from '../../types/User';
import { Comment } from '../../types/Comment';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './style.scss';

type Props = {
  title: string;
  body: string;
  user?: User;
  comments: Comment[];
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <div className="Post">
      <h2 data-cy="post-title" className="Post__title">{title}</h2>
      <p data-cy="post-body" className="Post__text">{body}</p>
      {user && <UserInfo name={user.name} email={user.email} />}
    </div>
    <CommentList comments={comments} />
  </>
);
