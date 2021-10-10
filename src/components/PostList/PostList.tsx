import React from 'react';
import './PostList.scss';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import { Comments } from '../Comments/Comments';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = (({ posts = [] }) => (
  <ul className="posts-list">
    {posts.map((post) => {
      return post.user && (
        <li className={`posts-list__item item ${post.id}`}>
          <PostInfo title={post.title} body={post.body} />
          <UserInfo
            username={post.user.username}
            website={post.user.website}
            phone={post.user.phone}
            email={post.user.email}
          />
          <Comments comments={post.comments} />
        </li>
      );
    })}
  </ul>
));
