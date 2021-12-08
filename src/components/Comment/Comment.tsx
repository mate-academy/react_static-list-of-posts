import React from 'react';
import { IComments } from '../../types/IComments';
import './Comment.scss';

type Props = Omit<IComments, 'postId' | 'id'>;

export const Comment: React.FC<Props> = ({ name, body, email }) => {
  return (
    <div className="comment">
      <div className="comment__autor">
        <img className="comment__img" src="https://image.freepik.com/free-photo/portrait-of-dark-skinned-confident-man-with-curly-afro-hairstyle-has-calm-face-expression_273609-8520.jpg" alt="" />
        <div className="comment__email">
          {email}
        </div>
      </div>
      <h4 className="comment__name">
        {name}
      </h4>
      <p className="comment__body">
        {body}
      </p>
    </div>
  );
};
