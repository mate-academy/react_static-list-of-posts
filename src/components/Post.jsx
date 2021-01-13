import React from 'react';
import User from './User';
import CommentList from './CommentList';

import {PostShape} from '../types';

const Post = ({post}) => (
  <>
      <p>Title: {post.title}</p>

      <p>Text: {post.body}</p>

      <div>
        User: <User {...post.user}/>
      </div>

      <div>
      <h2>Comments:</h2>
      <CommentList comments={post.comments}/>
      </div>
  </>
)

Post.propTypes = {
  post: PostShape.isRequired,
}

export default Post;
