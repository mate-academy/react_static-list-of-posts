import { UserInfo } from '../UserInfo';

import { CommentList } from '../CommentList';

import { Post } from '../../types/Post';

import './PostInfo.scss';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = (({
  post: {
    body,
    title,
    comment,
    user,
  },
}) => (
  <div className="PostInfo">
    <h3 className="PostInfo__title">
      {title}
    </h3>

    {user && (
      <p>
        {' Posted by  '}
        <UserInfo user={user} />
      </p>
    )}

    <p className="PostInfo__body">
      {body}
    </p>

    {
      comment.length ? (
        <CommentList comments={comment} />
      )
        : (
          <>
            <hr />
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>

        )

    }

  </div>
));
