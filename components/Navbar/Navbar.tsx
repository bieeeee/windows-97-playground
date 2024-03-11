'use client'
import Image from 'next/image';
import { useState } from 'react';
import Dropdown from '@components/Dropdown/Dropdown';
import { logo } from '@images';

type Props = {}

const Navbar: React.FC = (props: Props) => {
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
        <nav className={'w-full h-10 p-3 flex items-center cBorder sticky z-10 top-0'}>
            <div
                className={'h-full flex items-center relative'}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
            >
                <div className={'p-1 flex gap-1.5 items-center justify-center cBorder cursor-pointer'}>
                    <Image src={logo} alt="logo" width={19} height={19} priority={true} />
                    <span>Start</span>
                </div>
                {dropdown && <Dropdown />}
            </div>
        </nav >
    )
}

export default Navbar;