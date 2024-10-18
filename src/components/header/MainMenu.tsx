"use client";

import Desktop from "./Desktop";

export default function MainMenu() {
  return (
    <header className="fixed top-0 left-0 w-full z-30 border-b-0 lg:border-b-[2px] border-gray-200 bg-white dark:bg-gray-800  ">
      <div className="max-w-4xl min-h-16 mx-auto relative  ">
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full ">
          <Desktop />
        </div>
      </div>
    </header>
  );
}
