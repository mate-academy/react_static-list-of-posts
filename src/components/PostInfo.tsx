import { Post } from '../types/Post';
import { CommentList } from './CommentList';
import { UserInfo } from './UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="post__post">
      <h3 className="post__title">{`Title: ${post.title}`}</h3>
      <div>{`Текст: ${post.body}`}</div>
      <UserInfo user={post.user} />
    </div>

    <CommentList comments={post.comments} />
  </>
);
