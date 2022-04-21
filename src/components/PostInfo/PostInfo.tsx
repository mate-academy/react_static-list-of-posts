import { Posts } from '../../Types/posts';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

type Props = {
  post: Posts;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="postInfo">
    <div className="postInfo__user">
      {post.user ? (<UserInfo user={post.user} />) : 'Unknown User'}
    </div>
    <h3 className="postInfo__title">
      {post.title}
    </h3>
    <p className="postInfo__text">
      {post.body}
    </p>
    <CommentList comments={post.comments} />
  </div>
);
