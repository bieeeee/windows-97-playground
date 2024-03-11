'use client'
import { useState } from 'react';
import { MenuItems } from './MenuItem';
import Link from 'next/link';

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={!click ? 'cBorder w-[12.5rem] m-0 p-0 absolute top-[2.375rem] left-[.1875rem] text-start z-0' : 'hidden'}
    >
      {MenuItems.map((item, index) => {
        return (
          <Link href={item.path} key={index} replace>
            <li className={'bg-gray-200 hover:bg-dark-navy hover:text-white'} onClick={() => setClick(false)}>
              <span className={'block w-full h-full p-4 text-base hover:text-white'}>
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
