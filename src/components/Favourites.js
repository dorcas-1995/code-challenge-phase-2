import React, { useState } from "react";

function Favorites({ favorites }) {
  return (
    <div className="fav">
      <h2>My Favorite Poems</h2>
      {favorites}
    </div>
  );
}

export default Favorites;