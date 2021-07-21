import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about mt-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold">About</h1>
      {/* a banner component with left hand section having the text: societalcyst.org */}
      <div className="grid grid-cols-3 w-full gap-7 mt-6">
        <div className="left col-span-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="right">
          <img
            src="https://images.unsplash.com/photo-1626710916599-2cecf608f45e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
            alt=""
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
