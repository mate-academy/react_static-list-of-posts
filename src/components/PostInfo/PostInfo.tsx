import { Post } from '../../typedefs';
import { CommentList } from '../CommentsList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

interface Props {
  post: Post,
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="posts__item-main">
      <h2 className="posts__item-main-title">{post.title}</h2>
      <p className="posts__item-main-text">{post.body}</p>
      {
        post.user && <UserInfo user={post.user} />
      }
    </div>

    {
      post.comments && (<CommentList comments={post.comments} />)
    }
  </>
);
