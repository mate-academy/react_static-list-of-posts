import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import posts from '../../api/posts';
import comments from '../../api/comments';
import users from '../../api/users';

type Props = {
  posts: Post[];
};

const preparedPosts: Post[] = [...posts].map((element: Post) => {
  const prepared = { ...element };

  prepared.user = users.find(person => person.id === prepared.userId) || null;
  prepared.comment = comments.filter(coment => coment.postId === prepared.id);

  return prepared;
});

// eslint-disable-next-line no-console
console.log(preparedPosts);

export const PostList: React.FC<Props> = () => (
  <ul>
    {preparedPosts.map(post => (
      <li className="post" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
