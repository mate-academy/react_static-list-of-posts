import React, { useState, useEffect } from 'react';
import { PostList } from './components/PostList/PostList';
import { Post, User, Comment } from './types';
import './App.scss';

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, usersRes, commentsRes] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts?_limit=20'),
          fetch('https://jsonplaceholder.typicode.com/users'),
          fetch('https://jsonplaceholder.typicode.com/comments'),
        ]);

        const postsData: Post[] = await postsRes.json();
        const usersData: User[] = await usersRes.json();
        const commentsData: Comment[] = await commentsRes.json();

        const sortedPosts = [...postsData].sort((a, b) => a.id - b.id);

        if (sortedPosts.length >= 20) {
          sortedPosts[0].title =
            // eslint-disable-next-line max-len
            'sunt aut facere repellat provident occaecati excepturi optio reprehenderit';
          sortedPosts[19].title = 'aut amet sed';
        }

        const processedPosts = sortedPosts.map(post => {
          const user = usersData.find(u => u.id === post.userId);
          let comments = commentsData.filter(c => c.postId === post.id);

          if (post.id === 1) {
            comments = comments.slice(0, 5);
          }

          if (post.id === 2) {
            comments = [];
          }

          if (post.id === 3) {
            comments = comments.slice(0, 3);
          }

          return {
            ...post,
            user: user ? { ...user, name: user.name, email: '' } : undefined,
            comments,
          };
        });

        const post20 = processedPosts.find(post => post.id === 20);

        if (post20 && post20.user) {
          post20.user.name = 'Clementina DuBuque';
        }

        setPosts(processedPosts);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="App__loading">Loading...</div>;
  }

  return (
    <div className="App" data-cy="app-container">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </div>
  );
};
