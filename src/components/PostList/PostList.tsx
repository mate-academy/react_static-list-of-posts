import React from 'react';
import { PostInfo } from '../PostInfo';
import { Posts } from '../../types/Post';

interface Props {
  posts: Posts[];
}

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <section className="PostList">
      {posts.map((card) => (
        <div key={card.id}>
          <PostInfo
            user={card?.user}
            comments={card.comments}
            title={card.title}
            body={card.body}
            id={card.id}
          />
        </div>
      ))}
    </section>
  );
};
