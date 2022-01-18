export const CommentInfo: React.FC<Coment> = ({
  name,
  body,
  email,
}) => (
  <div className="ui inverted segment">
    <div className="ui inverted relaxed divided list">
      <div className="item">
        <div className="content">
          <div className="header">{body}</div>
        </div>
      </div>
      <div className="item">
        <div className="content">
          <div className="header">{email}</div>
        </div>
      </div>
      <div className="item">
        <div className="content">
          <div className="header">{name}</div>
        </div>
      </div>
    </div>
  </div>
);
