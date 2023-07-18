import React from "react";

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-between px-4 py-2">
      <div className="px-4">
        <h1 className="text-lg">Anime hub</h1>
      </div>
      <div>
        <ul className="flex flex-row gap-3">
          <li>Home</li>
          <li>Top series</li>
          <li>Recent watched</li>
          <li>About us</li>
        </ul>
      </div>
    </div>
  );
};
