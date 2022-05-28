import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-6 bg-[#f50a16] text-gray-100">
      <p className="text-gray-900 font-bold" style={{ width: '100px' }}>
        NC NEWS
      </p>

      <ul className="hidden md:flex cursor-pointer font-semibold">
        <li className="hover:text-black hover:scale-125 duration-300 px-4">
          <Link to="/">HOME</Link>
        </li>
        <li className="hover:text-black hover:scale-125 duration-300 px-4">
          <Link to="/articles">ALL ARTICLES</Link>
        </li>
        {/* <li className="hover:text-black hover:scale-125 duration-300 px-4">
          <Link to="/articles/coding">CODING</Link>
        </li>
        <li className="hover:text-black hover:scale-125 duration-300 px-4">
          <Link to="/articles/cooking">COOKING</Link>
        </li>
        <li className="hover:text-black hover:scale-125 duration-300 px-4">
          <Link to="/articles/football">FOOTBALL</Link>
        </li> */}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? (
          <FaBars className=" hover:scale-150 hover:text-gray-600 duration-150 " />
        ) : (
          <FaTimes className=" hover:scale-150 hover:text-gray-600 duration-150 " />
        )}
      </div>

      {/* Mobile meny */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'md:hidden absolute top-0 left-0 w-full h-screen bg-[#f50a16da] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl hover:text-black hover:scale-125 duration-300">
          <Link to={`/articles`}>ALL ARTICLES</Link>
        </li>
        <li className="py-6 text-4xl hover:text-black hover:scale-125 duration-300">
          <Link to={`/articles/coding`}>CODING</Link>
        </li>
        <li className="py-6 text-4xl hover:text-black hover:scale-125 duration-300">
          <Link to={`/articles/cooking`}>COOKING</Link>
        </li>
        <li className="py-6 text-4xl hover:text-black hover:scale-125 duration-300">
          <Link to={`/articles/football`}>FOOTBALL</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
