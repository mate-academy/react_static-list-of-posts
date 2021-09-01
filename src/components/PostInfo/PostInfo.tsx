import { Post } from '../../types/types';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="post">
      <div className="post__main">
        <h2 className="post__title">
          {title}
        </h2>

        <p className="post__content">
          {body}
        </p>

        {user && <UserInfo user={user} />}
      </div>

      <CommentList comments={comments} />
    </div>
  );
};
