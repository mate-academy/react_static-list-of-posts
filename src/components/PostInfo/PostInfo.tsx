import { IPreparedPost } from '../../types/Types';
import './PostInfo.scss';

import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: IPreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <>
      <h2 className="post-list__tit">
        {post.title}
      </h2>
      <p className="post-list__body">
        {post.body}
      </p>
      {post.user && (
        <UserInfo user={post.user} />
      )}
      <CommentList comments={post.comments} />
    </>
  );
};
