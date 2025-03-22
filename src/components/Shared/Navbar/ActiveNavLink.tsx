'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const ActiveNavLink = ({ title, link }: { title: string, link: string }) => {
    const currentPath = usePathname();
    const activePath = currentPath == link;

    return (
        <li className="relative text-xs xl:text-[16px] group">
            <Link href={link} className={`relative block font-medium pb-2 ${activePath ? 'bg-[#85EDE366]' : ''}`}>
                {title}
                <span
                    className={`absolute left-0 bottom-0 h-[2px] ${activePath ? 'w-full' : 'w-0'} bg-[#85EDE366] transition-all duration-300 group-hover:w-full `}
                ></span>
            </Link>
        </li>
    )
}

export default ActiveNavLink;
