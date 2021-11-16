import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import { Post } from '../../types/types';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <p className="postTitle">
      {'Post: '}
      {post.title}
    </p>
    <p className="postBody">{post.body}</p>
    {post.user ? <UserInfo person={post.user} /> : null}
    {post.comment ? <CommentList comments={post.comment} /> : null}
  </>
);
