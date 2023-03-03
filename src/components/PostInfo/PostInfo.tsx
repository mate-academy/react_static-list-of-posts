import { Post } from '../../types/Posts';
import { Comment } from '../../types/Comments';
import { User } from '../../types/Users';

import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

interface Props {
  info: Post,
  comment: Comment[],
  user: User,
}

export const PostInfo: React.FC<Props> = ({ info, comment, user }) => {
  const { title, body } = info;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          Posted by &nbsp;
          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />
      {comment.length > 0 ? (<CommentList comments={comment} />) : (<b data-cy="NoCommentsMessage">No comments yet</b>)}
    </div>
  )
}
