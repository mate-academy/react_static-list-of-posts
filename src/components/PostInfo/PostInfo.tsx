import { Post } from '../../types/Post';
import { CommentsList } from '../CommentsList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo_Head">
      <h3 className="PostInfo_Title">{post.title}</h3>
      <p className="PostInfo_Text">
        {post.body}
      </p>
      {post.user && (
        <div className="PostInfo_User">
          <UserInfo user={post.user} />
        </div>
      )}
    </div>
    <CommentsList comments={post.comments} />
  </div>
);
