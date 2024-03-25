import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface IconProps {
    title: string;
    href: string;
    iconImg: any;
    target?: string;
    rel?: string;
    open?: any;
}

export const Icon: React.FC<IconProps> = ({
    title,
    href,
    iconImg,
    target,
    rel,
    open
}) => {
    return (
        <Link href={href} onClick={open} className="icon flex flex-col justify-center" target={target} rel={rel}>
            <div className='w-10 h-10'>
                {iconImg}
            </div>
            <p className="">{title}</p>
        </Link>
    )
}