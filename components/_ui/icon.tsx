import Link from 'next/link';
import Image from 'next/image';

interface IconProps {
    title: string;
    href: string;
    image: any;
    target?: string;
    rel?: string;
    open?: any;
}

export const Icon: React.FC<IconProps> = ({
    title,
    href,
    image,
    target,
    rel,
    open
}) => {
    return (
        <Link href={href} onClick={open} className="w-12 flex flex-col justify-center items-center" target={target} rel={rel}>
            <div className='w-10 h-10 leading-normal'>
                <Image src={image} alt={title} />
            </div>
            <span>{title}</span>
        </Link>
    )
}