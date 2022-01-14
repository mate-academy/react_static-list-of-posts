import { Post } from '../../types/PropTypes';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  postItem: Post;
};

export const PostInfo: React.FC<Props> = ({ postItem }) => (
  <div>
    <div className="title">{postItem.title}</div>
    {postItem.user && <UserInfo userItem={postItem.user} />}
    <div>
      {postItem.body}
    </div>
    {postItem.commentsList && <CommentList comments={postItem.commentsList} />}
  </div>
);
