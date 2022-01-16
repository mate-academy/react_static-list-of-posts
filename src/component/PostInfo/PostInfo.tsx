import { Post } from '../../types/Types';
import { CommentInfo } from '../CommentInfo';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

type PropsPost = {
  post: Post
};

export const PostInfo: React.FC<PropsPost> = ({ post }) => (
  <>
    <div className="user">
      <h2 className="user__title">{post.title}</h2>
      <p>{post.body}</p>
      {post.user && <UserInfo user={post.user} />}
      {post.comments && <CommentInfo comments={post.comments} />}
    </div>
  </>
);
