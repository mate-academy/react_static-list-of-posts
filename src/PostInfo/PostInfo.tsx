import React from 'react';

import { Comment } from '../types/Comment';
import { User } from '../types/User';
import { Post } from '../types/Post';

import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type PreparedPosts = {
  user: User | null,
  comments: Comment[],
  post: Post
};

type Props = {
  posts: PreparedPosts[]
};

export const PostInfo:React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <>
      {posts.map(postElement => {
        const { post, user, comments } = postElement;
        const { body, title, id } = post;

        const userComment = comments.filter(comment => comment.postId === post.id);

        return (
          <ul className="list" key={id}>
            <li className="list__title">
              {title}
            </li>
            <li className="list__body">
              {body}
            </li>
            <UserInfo userProps={user} />
            <CommentList commentsProps={userComment} />
          </ul>
        );
      })}
    </>

  );
};
