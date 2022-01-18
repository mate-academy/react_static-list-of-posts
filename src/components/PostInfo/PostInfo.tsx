import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <ul className="postInfo">
    <h2 className="postInfo__title">{post.title}</h2>
    <p className="postInfo__body">{post.body}</p>
    {post.user && <UserInfo user={post.user} />}
    {post.comments && <CommentList comments={post.comments} />}
  </ul>
);
