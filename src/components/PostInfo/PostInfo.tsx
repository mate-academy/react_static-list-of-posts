import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { User } from '../../types/User';
import { Comment } from '../../types/Comment';
import './PostInfo.scss';

type Props = {
  post: Post;
  users: User[];
  comments: Comment[];
};

export const PostInfo: React.FC<Props> = ({ post, users, comments }) => {
  const user = users.find(postUser => postUser.id === post.userId);
  const postComments = comments.filter(comment => comment.postId === post.id);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          {user ? (
            <UserInfo user={user} /> // Передаем объект user, если он найден
          ) : (
            <span>Unknown User</span> // Если пользователя нет, показываем текст
          )}
        </p>
      </div>
      <p className="PostInfo__body">{post.body}</p>
      <hr />
      <CommentList comments={postComments} />
    </div>
  );
};
