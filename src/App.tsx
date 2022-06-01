import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import {
  Comment, FullPost, Post, User,
} from './react-app-env';
import { PostList } from './components/PostList/PostList';

const App = () => {
  const preparedPosts = (
    posts: Post[],
    users: User[],
    comments: Comment[],
  ): FullPost[] => {
    return posts.map(post => ({
      ...post,
      user: users.find(user => user.id === post.userId),
      comments: comments.filter(comment => comment.postId === post.id),
    }));
  };

  const post = preparedPosts(
    postsFromServer,
    usersFromServer,
    commentsFromServer,
  );

  return (
    <div className="App">
      <PostList posts={post} />
    </div>
  );
};

export default App;
