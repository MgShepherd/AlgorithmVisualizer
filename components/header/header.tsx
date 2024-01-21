'use client';

import Link from 'next/link';

const Header = () => {
  const menuOptions = ['Search', 'Sort'];

  return (
    <div className="text-white h-20 flex items-center px-5 border-b-white border-b">
      <h1 className="mr-20">Algorithm Visualizer</h1>
      {menuOptions.map((option) => {
        return (
          <Link
            href={`/${option.toLowerCase()}`}
            className="mr-10 h-full flex items-center cursor-pointer"
            key={option}
          >
            <h2 className="text-stone-400">{option}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
