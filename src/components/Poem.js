import React, { useState } from "react";

function Poem({ poem, onDeletePoem }) {

  const { id, title, content, author } = poem;

  const [ isRead, setisRead ] = useState(false);

  const toggleRead = () => {

    setisRead((isRead) => !isRead);

  };

  function onClickDelete() {

    fetch(`http://localhost:8004/poems/${id}`, {

      method: "DELETE",

    })

      .then((r) => r.json())

      .then(() => {

        onDeletePoem(id);

      });

  }

  return (

    <div>

      <h3>{title}</h3>

      <p>{content}</p>

      <p>

        <strong>- {author}</strong>

      </p>

      <button onClick={toggleRead}>

        {isRead ? "Mark as Unread" : "Mark as Read"}

      </button>

      <button onClick={onClickDelete} style={{ marginLeft: "10px" }}>

        Delete Poem

      </button>

    </div>

  );

}

export default Poem
