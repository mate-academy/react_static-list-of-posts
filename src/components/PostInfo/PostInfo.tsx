import { User } from '../../types/User';
import { Comment } from '../../types/Comment';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import './PostInfo.scss';

type Props = {
  title: string,
  body: string,
  user: User | null,
  comments: Comment[],
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        {' Posted by  '}

        {user && (
          <UserInfo
            key={user.id}
            name={user.name}
            email={user.email}
          />
        )}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {(comments.length
        ? (<CommentList comments={comments} />)
        : (
          <>
            <hr />

            <b>No comments yet</b>
          </>
        )
      )}
    </div>
  </>
);
