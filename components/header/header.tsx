'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathName = usePathname();
  const menuOptions = ['Search', 'Sort'];

  const getOptionColor = (option: string) => {
    if (pathName.endsWith(option.toLowerCase())) {
      return 'text-blue-400';
    }
    return 'text-stone-400';
  };

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
            <h2 className={getOptionColor(option)}>{option}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
