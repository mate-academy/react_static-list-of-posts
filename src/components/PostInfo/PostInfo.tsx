import React from 'react';
import { Post } from '../../types/post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  function handleClick() {
    const elem = document.getElementById(post.id.toString() || '');

    if (elem && elem.style.display === 'block') {
      elem.style.display = 'none';
    } else if (elem) {
      elem.style.display = 'block';
    }
  }

  return (
    <div className="postInfo">
      <div className="postInfo__mainInfo">
        <div className="postInfo__mainInfo--user">
          {post.user && <UserInfo user={post.user} />}
        </div>

        <div className="postInfo__mainInfo--content">
          <h2 className="postInfo__mainInfo--content-title">{post.title}</h2>
          <p className="postInfo__mainInfo--content-body">{post.body}</p>
        </div>
      </div>

      <button type="button" className="postInfo__commentLink" onClick={handleClick}>
        Comments
      </button>

      <div id={post.id.toString()} className="postInfo__comments">
        <CommentList comments={post.comments} />
      </div>
    </div>
  );
};
