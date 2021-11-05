import { PreparedPost } from '../../types/types';
import { UserPost } from '../UserPost/UserPost';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="Post">
    <h3 className="Post__title">{post.title}</h3>
    <UserPost
      classes="Post"
      body={post.body}
      user={post.user}
    />
    <CommentList comments={post.comments} />
  </div>
);
