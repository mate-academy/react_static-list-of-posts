import React from 'react';
import { PostsData } from '../../Types';
import PostInfo from '../PostInfo/PostInfo';
import '../../style.scss';

type Props = {
  postData: PostsData[];
};

const PostList: React.FC<Props> = ({ postData }) => {
  return (
    <div className="post__wrapper space-between">
      {
        postData.map(post => (

          <div
            className="post__wrapper-items"
            data-cy="post-info"
            key={post.id}
          >

            <PostInfo
              body={post.body}
              title={post.title}
              comments={post.comments}
              users={post.usersInfo}
            />
          </div>
        ))
      }
    </div>
  );
};

export default PostList;
