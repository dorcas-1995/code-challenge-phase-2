import React, { useState } from "react"

function NewPoemForm({ onAddPoem }) {

  const [formData, setFormData] = useState({

    title: "",

    content: "",

    author: "",

  });

  function handlechange(e) {

    setFormData({ ...formData, [e.target.name]: e.target.value });

  }

  function handleSubmit(e) {

    e.preventDefault();

    fetch("http://localhost:8004/poems", {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify({

        title: formData.title,

        content: formData.content,

        author: formData.author,

      }),

    })

      .then((r) => r.json())

      .then((newPoem) => {

        onAddPoem(newPoem);

        setFormData({ ...formData, title: "", author: "", content: "" });

      });

  }
  return (

    <form onSubmit={handleSubmit} className="new-poem-form">

      <input

        value={formData.title}

        name="title"

        onChange={handlechange}

        placeholder="Title"

      />

      <input

        value={formData.author}

        name="author"

        onChange={handlechange}

        placeholder="Author"

      />

      <textarea

        value={formData.content}

        name="content"

        onChange={handlechange}

        placeholder="Write your masterpiece here..."

        rows={10}

      />

      <input type="submit" value="Share your masterpiece" />

    </form>

  );

}

export default NewPoemForm;

