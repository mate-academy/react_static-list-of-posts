import { UserInfo } from '../UserInfo/UserInfo';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comments } from '../../types/Comments';
import { User } from '../../types/User';

type Post = {
  title: string,
  body:string,
  user: User | null,
  comments: Comments[] | null,
};

type Props = {
  post:Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    {post.title}
    {post.body}
    <UserInfo user={post.user} />
    Comments:
    {post.comments && (<CommentInfo comments={post.comments} />)}
  </>
);
