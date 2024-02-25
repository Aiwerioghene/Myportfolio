import React from "react";
import { ReactTyped as Typed } from "react-typed"; // Update the import statement

const Home = () => {
  return (
    <div className="w-[100%]  h-[100vh] flex flex-col items-center justify-center text-gray-300">
      <Typed
        className="md:text-5xl lg:text-6xl sm:text-4xl text-2xl font-bold md:pl-4 pl-2 text-center font-fontt2 tracking-widest"
        strings={["Front End Developer", "Welcome to my Portfolio!"]}
        typeSpeed={120}
        backSpeed={100}
        loop
      />
    </div>
  );
};

export default Home;
