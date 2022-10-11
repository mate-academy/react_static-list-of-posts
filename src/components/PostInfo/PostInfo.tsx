import { FC } from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

type Probs = {
  post: Post;
};

export const PostInfo: FC<Probs> = ({
  post: {
    title,
    body,
    user,
    comments,
  },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      <p>
        {' Posted by  '}

        <UserInfo user={user} />
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {
      comments.length
        ? <CommentList comments={comments} />
        : (
          <p data-cy="NoCommentsMessage">No comments</p>
        )
    }
  </div>
);
