import './PostList.scss';
import PostInfo from './PostInfo/PostInfo';

import posts from '../../api/posts';
import comments from '../../api/comments';
import users from '../../api/users';

const preparedPosts = posts.map(element => ({
  ...element,
  user: users.find(user => user.id === element.userId) || null,
  comment: comments.filter(comment => comment.postId === element.id) || null,
}));

const PostList: React.FC = () => {
  return (
    <ul className="post-list">
      {preparedPosts.map(post => (
        <li className="post-list__block" key={post.id}>
          <PostInfo postInfo={post} />
        </li>

      ))}
    </ul>
  );
};

export default PostList;
