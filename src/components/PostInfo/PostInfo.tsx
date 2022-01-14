import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2 className="post__title">{post.title}</h2>
    <p className="post__body">{post.body}</p>
    <UserInfo user={post.user} />
    <CommentList comments={post.comments} />
  </>

);
