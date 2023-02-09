import React from 'react';

import { Post } from '../../types/Posts';
import { User } from '../../types/Users';
import { Comment } from '../../types/Comments';

import { PostInfo, PostWithComments } from '../PostInfo/PostInfo';

import users from '../../api/users';
import coments from '../../api/comments';

interface AllPosts {
  allPosts: Post[];
}

export const PostList: React.FC<AllPosts> = ({ allPosts }) => {
  const postUserComent: PostWithComments[] = allPosts.map((elem: Post) => {
    const elemUser = users.find((user: User) => user.id === elem.userId);
    const comentElem: Comment[] = coments.filter(
      (coment) => coment.postId === elem.userId,
    );

    return {
      ...elem,
      user: elemUser as User,
      comments: comentElem,
    };
  });

  return (
    <div className="PostList">
      {postUserComent.map((postElem) => (
        <PostInfo post={postElem} />
      ))}
    </div>
  );
};
