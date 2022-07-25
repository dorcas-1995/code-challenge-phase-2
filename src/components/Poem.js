import React from "react";

function Poem({ title, author, content, onClickDeleteButton, poem }) {

  const [isRead, setIsRead] = useState(false);

  function handleMarkAsReadButton() {
    setIsRead((isRead) => !isRead);
  }
  
  return (
    <div>
      <h3>Title</h3>
      <p>Content</p>
      <p>
        <strong>- By Author</strong>
      </p>
      <button>Mark as read</button>
    </div>
  );
}

export default Poem;
