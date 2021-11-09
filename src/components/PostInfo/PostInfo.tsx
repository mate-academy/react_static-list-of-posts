import { PreparedPost } from '../../types/types';
import { UserPost } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return post.user && (
    <div className="Post">
      <h3 className="Post__title">{post.title}</h3>
      <UserPost
        classes="Post"
        body={post.body}
        user={post.user}
      />
      {post.comments.length && (
        <CommentList comments={post.comments} />
      )}
    </div>
  );
};
