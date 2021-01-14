import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { User } from '../User/User';
import './Post.scss';
import { PostType } from '../Types';

export const Post = ({ title, body, user, listOfComment }) => (
  <div className="post">
    <div className="post__border">
      <b>
        {`Title: `}
      </b>
      {title}
      <p>
        {body}
      </p>
      <User {...user} />
      <CommentList comments={listOfComment} />
    </div>
  </div>
);

Post.propTypes = PostType.isRequired;
