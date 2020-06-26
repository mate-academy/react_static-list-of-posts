import React from 'react';
// import { Fragment } from 'react';
import { postShape } from './Shapes';
import { Author } from './Author';
import { Comments } from './Comments';
import { Text } from './Text';
import './Post.css';
import { commentsFilter } from '../utils/prepareDate';

export const Post = (props) => {
  const { comments, postAuthor, postId, postTitle, postText } = props;
  const postComments = commentsFilter(comments, postId);

  return (
    <div className="post">
      <Author {...postAuthor} />
      <Text title={postTitle} text={postText} />
      <Comments comments={postComments} />
    </div>
  );
};

Post.propTypes = postShape.isRequired;
