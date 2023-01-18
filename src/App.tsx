import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/user';
import { Comment } from './types/comment';

export const App: React.FC = () => {
  const posts: {
    id: number,
    title: string,
    body: string,
    user: User,
    comments: Comment[]
  }[] = postsFromServer.map(post => ({
    id: post.id,
    title: post.title,
    body: post.body,
    user: usersFromServer
      .find(u => u.id === post.userId)
      || {
        name: 'unknown',
        email: 'unknown',
      },
    comments: commentsFromServer
      .filter(comment => comment.postId === post.id)
      || [],
  }));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={posts} />
    </section>
  );
};
