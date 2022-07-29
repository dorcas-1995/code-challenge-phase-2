import React, { useEffect, useState } from "react";
import Poem from "./Poem";

function PoemsContainer({ poems, onHandldeDeletePoem }) {
  let poemList = poems.map((poem) => {
    return (
      <Poem
        key={poem.id}
        poem={poem}
        title={poem.title}
        author={poem.author}
        content={poem.content}
        onClickDeleteButton={onHandldeDeletePoem}
      />
    );
  });

  return <div className="poems-container">{poemList}</div>;
}

export default PoemsContainer;


