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
      <h3>{title}</h3>

      <p style={isRead ? { color: "gray" } : { color: "black" }}>{content}</p>

      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={handleMarkAsReadButton}>
        {isRead ? "Mark as unread" : "Mark as read"}
      </button>
      <button className="remove" onClick={handleDeleteButton}>
        DELETE
      </button>
      <button className="favorites">Add To Favorites</button>
    </div>
  );
}

export default Poem;
