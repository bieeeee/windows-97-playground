'use client'
import Link from 'next/link';
import { useState } from 'react';
import { MenuItems } from './MenuItem';

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={!click ? 'cBorder w-[12.5rem] m-0 p-0 absolute top-6 left-1 text-start z-0' : 'hidden'}
    >
      {MenuItems.map((item, index) => {
        return (
          <Link href={item.path} key={index} replace>
            <li className={'bg-gray-200 hover:bg-blue-300'} onClick={() => setClick(false)}>
              <span className={'block w-full h-full p-4 hover:text-white'}>
                {item.title}
              </span>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default Dropdown;
