import React from 'react';
import { PreparedPost } from '../../types';
import { Author } from '../Author/Author';
import { Comments } from '../Comments/Comments';

type Props = {
  data: PreparedPost[];
};
export const PostList: React.FC<Props> = ({ data }) => (
  <ul className="post-list">
    {data.map(preparedPost => {
      return (
        <li className="post-list__item post" key={preparedPost.id}>
          <h3 className="post__title">
            {`Title: ${preparedPost.title}`}
          </h3>
          <p className="post__body">
            {`Body: ${preparedPost.body}`}
          </p>
          <Author data={preparedPost.user} />
          <Comments data={preparedPost.commentArray} />
        </li>
      );
    })}
  </ul>
);
