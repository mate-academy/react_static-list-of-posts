import { UserInfo } from '../UserInfo/UserInfo';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import comments from '../../api/comments';
import { Comments } from '../../types/Comments';
import { User } from '../../types/User';

type Post = {
  title: string,
  body:string,
  user: User,
  comments: Comments,
};

export const PostInfo: React.FC<Post> = (post) => (
  <>
    {post.title}
    {post.body}
    <UserInfo user={post.user} />
    Comments:
    {comments && (<CommentInfo comments={post.comments} />)}
  </>
);
