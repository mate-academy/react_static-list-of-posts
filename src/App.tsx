import './App.scss';

import { PostInfoData } from './types/PostInfoData';
import { User } from './types/User';
import { Comment } from './types/Comment';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

function findUser(userId:number): User | null {
  return usersFromServer.find((user: User) => user.id === userId) || null;
}

function getComments(postId: number): Comment[] {
  return commentsFromServer.filter((comment) => comment.postId === postId);
}

const postInfoData: PostInfoData[] = postsFromServer.map((post) => {
  const user = findUser(post.userId);
  const comments: Comment[] = getComments(post.id);

  return ({
    ...post,
    user,
    comments,
  });
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList data={postInfoData} />
  </section>
);
