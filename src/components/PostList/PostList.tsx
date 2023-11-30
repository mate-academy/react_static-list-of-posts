// import React from 'react';
import { Post } from '../../types/post';
import { UserInfo } from '../UserInfo/UserInfo';
import { PostInfo } from '../PostInfo/PostInfo';
// import { CommentList } from '../CommentList';

type PostType = {
  posts: Post[],
};

export const PostList = ({ posts }: PostType) => {
  return (
    <>
      {posts.map(post => {
        return (
          <div className="PostList">
            <div className="PostInfo">
              <div className="PostInfo__header">
                <h3 className="PostInfo__title">{post.title}</h3>

                <UserInfo user={post} />

              </div>
              <PostInfo post={post} />
              <div className="CommentList">
                {/* <CommentList post={post} /> */}
              </div>
              {/*
                <div className="CommentInfo__title">
                  <strong className="CommentInfo__name">pariatur omnis</strong>

                  {' by '}

                  <a
                    className="CommentInfo__email"
                    href="mailto:Telly_Lynch@karl.co.uk"
                  >
                    Telly_Lynch@karl.co.uk
                  </a>
                </div>

                <div className="CommentInfo__body">
                  dolorum voluptas laboriosam quisquam ab totam beatae et aut
                  aliquid optio assumenda voluptas velit itaque quidem voluptate
                  tempore cupiditate in itaque sit molestiae minus dolores magni
                </div>
               */}
            </div>
          </div>
        );
      })}
    </>
  );
};
