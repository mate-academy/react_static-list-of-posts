import React from 'react';
import './PostList.scss';
import { PreparedPost } from '../../appTypeDefs';

interface PostListProps {
  posts: PreparedPost[];
}

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <>
    {
      posts.map(post => (
        <article className="Article" key={post.id}>
          <section className="Post">
            <h2>{post.title}</h2>
            <h4>{`Author: ${post.user?.name}`}</h4>
            <p>{post.body}</p>
          </section>
          <section className="Comment">
            <h4>{`Comment By: ${post.comment?.email}`}</h4>
            <p>{post.comment?.body}</p>
          </section>
        </article>
      ))
    }
  </>
);
