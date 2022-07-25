import React from "react";

function Poem({ title, author, content, onClickDeleteButton, poem }) {

  const [isRead, setIsRead] = useState(false);

  function handleMarkAsReadButton() {
    setIsRead((isRead) => !isRead);
  }

  function handleDeleteButton() {
    fetch(`http://localhost:8004/poems/${poem.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onClickDeleteButton(poem));
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
