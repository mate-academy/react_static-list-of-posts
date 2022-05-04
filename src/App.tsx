import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import {
  Comment,
  User,
  PreparedPost,
  Post,
} from './Types/types';
import { PostList } from './components/PostList/PostList';
import './App.scss';

const preparedPosts: PreparedPost[] = posts.map((item: Post) => (
  {
    ...item,
    user: users.find((person: User) => (item.userId === person.id)) || null,
    comments: comments.filter((comment: Comment) => (
      item.id === comment.postId
    )),
  }
));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__header">Static list of posts</h1>
    <PostList postList={preparedPosts} />
  </div>
);

export default App;
