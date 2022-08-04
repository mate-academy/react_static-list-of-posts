import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = (props) => {
  const {
    post: {
      title,
      body,
      user,
      comments,
    },
  } = props;

  const noComents = (
    <>
      <hr />
      <b>No comments yet</b>
    </>
  );

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title || 'No title'}
        </h3>

        {' Posted by  '}

        {
          user
            ? <UserInfo user={user} />
            : 'Anonimous'
        }
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {
        comments.length === 0
          ? noComents
          : <CommentList comments={comments} />
      }
    </div>
  );
};
