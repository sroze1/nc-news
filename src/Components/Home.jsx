import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  // let navigate = useNavigate;

 

  return (
    <div>
      <button>
        <Link to={`/api`}>CLICK TO ENTER</Link>
      </button>
    </div>
  );
};

export default Home;
