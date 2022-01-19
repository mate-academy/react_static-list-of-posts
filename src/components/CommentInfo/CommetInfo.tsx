type Props = {
  commentary: Commentary;
};

export const CommentInfo: React.FC<Props> = ({ commentary }) => (
  <div className="comment">
    <div className="content">
      <span className="author">{commentary.email}</span>
      <div className="metadata">
        <span className="date">{commentary.name}</span>
      </div>
      <div className="text">
        {commentary.body}
      </div>
    </div>
  </div>
);
