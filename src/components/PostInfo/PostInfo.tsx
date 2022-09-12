import usersFromServer from '../../api/users';
import commentsFromServer from '../../api/comments';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import { Post } from '../../Types/Post';

export const PostInfo = ({
  userId,
  id,
  title,
  body,
}: Post) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      <p>
        {' Posted by  '}

        {UserInfo(usersFromServer.filter(user => user.id === userId))}
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {CommentList(commentsFromServer.filter(comment => comment.postId === id))}
  </div>
);
