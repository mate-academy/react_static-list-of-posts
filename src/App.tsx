import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { User } from './types/User';
import { UserComment } from './types/UserComment';

const posts = postsFromServer.map(post => {
  const user = usersFromServer
    .find(item => item.id === post.userId) as User;
  const comments = commentsFromServer
    .filter(comment => comment.postId === post.id) as UserComment[];

  return {
    ...post,
    user,
    comments,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList
      posts={posts}
    />
  </section>
);
