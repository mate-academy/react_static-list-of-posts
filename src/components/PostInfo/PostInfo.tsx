import { Post } from '../../types/Post';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    users,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {' Posted by  '}

        {users && <UserInfo user={users} />}
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      {comments.length
        ? <CommentList comments={comments} />
        : <b>No comments yet</b>}
    </div>
  );
};
