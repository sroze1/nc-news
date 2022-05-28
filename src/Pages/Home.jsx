import React from 'react';

const Home = () => {
  return (
    <>
      <div className="min-h-screen w-screen bg-gradient-to-r from-gray-700 to-black flex justify-center items-center flex-col-reverse lg: flex-row-reverse text-gray-200">
        <img
          src="https://images.vexels.com/media/users/3/131563/isolated/preview/93e49b6c5668d156aaee447bd9804fab-newspaper-circle-icon.png"
          alt="nc-news logo"
          className="w-500px pl-14 lg:max-w-xl"
        />
        <div className="mt-40 mb-6 text-center">
          <h1 className="font-black text-4xl font-light">
            Welcome to <br></br> <span className="font-bold">NC NEWS</span>{' '}
          </h1>
          <br></br>
          <p className="text-base text-xl text-gray-200">
            A React App to display articles using api calls to an SQL backend!
          </p>

          <p className="text-base text-xl text-gray-200">
            Click all articles in the responsive navbar to get started!
          </p>
          <br />
          <p className="text-base text-xl text-gray-200 mb-4">
            From there, you can either click on topics by hashtag, or select
            manually.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
