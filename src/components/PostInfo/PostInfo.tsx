import { Comment } from '../../types/comment';
import { Post } from '../../types/post';
import { User } from '../../types/user';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

type Props = {
  post: Post;
  user: User;
  comments: Comment[];
};

export const PostInfo: React.FC<Props> = ({ post, user, comments }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      {' Posted by  '}

      <UserInfo user={user} />
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <CommentList
      comments={comments.filter(({ postId }) => postId === post.id)}
    />
  </div>
);
