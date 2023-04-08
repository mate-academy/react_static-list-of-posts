import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import commentsFromServer from '../../api/comments';
import { Comment } from '../../types/Comment';
import postsFromServer from '../../api/posts';
// import { posts } from '../../App';
import './PostInfo.scss';

function getPost(postId: number): Post | null {
  const foundPost = postsFromServer.find(post => post.id === postId);

  return foundPost || null;
}

export const comments: Comment[] = commentsFromServer.map(comment => ({
  ...comment,
  post: getPost(comment.postId),
}));

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {post.title}
      </h3>

      <p>
        {' Posted by  '}

        {post.user && (
          <UserInfo user={post.user} />
        )}
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <CommentList postId={post.id} comments={comments} />
  </div>
);
