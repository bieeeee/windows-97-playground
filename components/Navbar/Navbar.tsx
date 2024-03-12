'use client'
import Image from 'next/image';
import { useState } from 'react';
import Dropdown from '@components/Dropdown/Dropdown';
import { logo } from '@images';

const Navbar: React.FC = () => {
    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        setDropdown(true);
    };

    const onMouseLeave = () => {
        setDropdown(false);
    };

    const onClick = () => {
        setDropdown(!dropdown);
    };

    return (
        <nav className={'w-full h-11 py-3 px-1 flex items-center cBorder sticky z-10 top-0'}>
            <div
                className={'h-full flex items-center relative'}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
            >
                <div className={'px-1 py-1.5 flex gap-1.5 items-center justify-center cBorder text-sm cursor-pointer'+ (dropdown? ' active': '')}>
                    <Image src={logo} alt="logo" width={19} height={19} priority={true} />
                    <span>Start</span>
                </div>
                {dropdown && <Dropdown />}
            </div>
        </nav >
    )
}

export default Navbar;