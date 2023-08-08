import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { Post } from '../../types/Post';

export type PostInfoProps = {
  post: Post;
};

export const PostInfo = (
  {
    post: {
      title, user, body, comments,
    },
  }: PostInfoProps,
) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      {user && <UserInfo user={user} />}
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <CommentList comments={comments} />
  </div>
);
