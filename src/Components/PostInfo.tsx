import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

import { User } from '../types/User';
import { Comment } from '../types/Comment';

type Props = {
  title: string,
  body: string,
  user?: User,
  comments: Comment [],
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <h2 className="post__title">
      {title}
    </h2>

    <p className="post__body">
      {body}
    </p>
    {
      user && (
        <div className="user">
          <UserInfo
            user={user}
          />
        </div>
      )
    }

    <CommentList
      comments={comments}
    />
  </>
);
