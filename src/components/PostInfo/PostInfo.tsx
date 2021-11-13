import React from 'react';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Post } from '../../types/Post';

interface Props {
  post: Post,
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2 className="title">
      {`Статья ${post.id}. ${post.title}`}
    </h2>
    <div className="text">
      {post.body}
    </div>
    {
      post.user === undefined
        ? <></>
        : (
          <UserInfo
            name={post.user.name}
            email={post.user.email}
          />
        )
    }
    {
      post.comments.map(comment => (
        <CommentInfo
          name={comment.name}
          body={comment.body}
          email={comment.email}
          key={comment.id}
        />
      ))
    }
  </>
);
