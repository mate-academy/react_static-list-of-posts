import React from 'react';

import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';
import { User } from '../../types/User';
import { Comment } from '../../types/Comment';

type Props = {
  posts: Post[],
  comments: Comment[],
  users: User[],
};

function createPostsInfo(
  posts: Post[],
  comments:Comment[],
  users: User[],
) {
  const postsInfo = posts.map(post => {
    const user = users.find(
      (person) => person.id === post.userId,
    );
    const postComments = comments.filter(
      (item) => post.id === item.postId,
    );

    if (!user) {
      return null;
    }

    return {
      ...post,
      user,
      comments: postComments,
    };
  });

  return postsInfo;
}

export const PostList: React.FC<Props> = ({
  posts,
  users,
  comments,
}) => {
  const postsInfo = createPostsInfo(
    posts,
    comments,
    users,
  );

  return (
    <div className="PostList">
      {postsInfo.map(postInfoItem => {
        if (!postInfoItem) {
          return null;
        }

        return (
          <div className="PostInfo" key={postInfoItem.id}>
            <PostInfo post={postInfoItem} />
          </div>
        );
      })}
    </div>
  );
};
