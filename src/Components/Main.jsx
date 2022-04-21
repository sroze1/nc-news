import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Main = () => {
  // Display all endpoints

  return (
    <div>
      <button>
        {" "}
        <Link to={`/articles`}>ARTCILES</Link>
      </button>
      <button>
        {" "}
        <Link to={`/users`}>USERS</Link>
      </button>
      <button>
        {" "}
        <Link to={`/topics`}>TOPICS</Link>
      </button>
    </div>
  );
};

export default Main;
