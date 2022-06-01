import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import {
  Comment, FullPost, Post, User,
} from './react-app-env';
import { PostList } from './components/PostList/PostList';
import './App.scss';

const App = () => {
  const getPreparedPosts = (
    posts: Post[],
    comments: Comment[],
    users: User[],
  ): FullPost[] => {
    return posts.map(post => ({
      ...post,
      user: users.find(user => user.id === post.userId),
      comments: comments.filter(comment => comment.postId === post.id),
    }));
  };

  const posts = getPreparedPosts(
    postsFromServer,
    commentsFromServer,
    usersFromServer,
  );

  return (
    <div className="App">
      <PostList posts={posts} />
    </div>
  );
};

export default App;
