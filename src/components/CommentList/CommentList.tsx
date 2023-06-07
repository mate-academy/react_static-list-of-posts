import React from 'react';

// import 'CommentList.scss';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comments[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>

    {/* : <b data-cy="NoCommentsMessage">No comments yet</b> */}
    {/* <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">
          odio adipisci rerum aut animi
        </strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href="mailto:Nikita@garfield.biz"
        >
          Nikita@garfield.biz
        </a>
      </div>

      <div className="CommentInfo__body">
        quia molestiae reprehenderit quasi aspernatur aut expedita
        occaecati aliquam eveniet laudantium omnis quibusdam delectus
        saepe quia accusamus maiores nam est cum et ducimus et vero
        voluptates excepturi deleniti ratione
      </div>
    </div> */}
  </>
);
