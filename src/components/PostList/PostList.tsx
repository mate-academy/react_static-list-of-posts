import React from 'react';
import { IPost } from '../../types/IPost';
import { CommentList } from '../CommentList/CommentList';
import { PostInfo } from '../PostInfo/PostInfo';
import { UserInfo } from '../UserInfo/UserInfo';

import './PostList.scss';

type Props = {
  posts: IPost[],
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="postList">
      {posts.map(post => (
        <div className="post" key={post.id}>
          <img className="post__img" src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200305114843-01-edge-hudson-yards-observation-deck.jpg" alt="" />
          <div className="post__body">
            <PostInfo
              title={post.title}
              body={post.body}
            />
            <UserInfo
              name={post.user === null ? 'no user name' : post.user.name}
              email={post.user === null ? 'no user email' : post.user.email}
            />
            <CommentList
              commentList={post.comments === null ? [] : post.comments}
            />
          </div>
        </div>

      ))}
    </div>
  );
};
