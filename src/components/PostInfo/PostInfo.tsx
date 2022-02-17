import { UserItem } from '../UserItem/UserItem';
import { CommentsList } from '../CommentsList/CommentsList';
import { Post } from '../../types';

type Props = {
  item: Post;
};
export const PostInfo: React.FC<Props> = ({ item }) => (
  <div className="post">
    <div className="post__content">
      <h3 className="post__title">{item.title}</h3>
      <div className="post__body">
        {item.body}
      </div>
      <div className="post__userInfo">
        {(item.user)
         && <UserItem userItem={item.user} />}
      </div>
    </div>
    <div className="post__commentList">
      <h4>Comments:</h4>
      <CommentsList commentsItems={item.comments} />
    </div>
  </div>
);
