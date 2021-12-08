import React from 'react';
import { IPost } from '../../types/IPost';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

import './PostInfo.scss';

type Props = Omit<IPost, 'userId' | 'id'>;

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => {
  return (
    <div className="post">
      <img
        className="post__img"
        src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200305114843-01-edge-hudson-yards-observation-deck.jpg"
        alt=""
      />
      <div className="post__body">
        <div className="postInfo">
          <h3 className="postInfo__title">
            {title}
          </h3>
          <p className="postInfo__body">
            {body}
          </p>
        </div>
        {user && (<UserInfo name={user.name} email={user.email} />)}
        {comments && (<CommentList commentList={comments} />)}
      </div>
    </div>
  );
};
