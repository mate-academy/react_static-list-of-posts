import { FC } from 'react';
import { FullPost } from '../types/Posts';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../commentList/CommentList';

interface Props {
  post: FullPost;
}

export const PostInfo: FC<Props> = ({ post }) => {
  return (
    <div className="post">
      <p className="post_title">
        {post.title}
      </p>
      <span className="post_body">
        {post.body}
      </span>
      <UserInfo user={post.user} />
      <CommentList comments={post.comments} />
    </div>
  );
};
