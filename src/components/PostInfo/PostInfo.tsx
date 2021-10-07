import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/index';
import { CommentList } from '../CommentList/index';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <>
      <p>{post.title}</p>
      {' '}
      <p>{post.body}</p>
      {' '}
      {post.user && <UserInfo user={post.user} />}
      <CommentList comments={post.comments} />
    </>
  );
};
