// eslint-disable-next-line import/no-cycle
import { PreparedPosts } from '../../App';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: PreparedPosts
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="post__base">
      <h2 className="post__title">
        {post.title}
      </h2>
      <p className="post__body">
        {post.body}
      </p>
    </div>
    <UserInfo infoUser={post.user} />
    <CommentList postComments={post.comments} />
  </>
);
