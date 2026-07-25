import { cn } from '@/lib/utils';
import Logo from './Logo';
import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderData } from '@/constants/data';
import React, { FC } from 'react'
import SocialMedia from './SocialMedia';
import { useOutsideClick} from '@/hooks';

interface SidebarProps{
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu:FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef=useOutsideClick<HTMLDivElement>(onClose)

  return (
    <div 
      className={cn(
        "fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/70 shadow-xl ",
        isOpen? "translate-x-0" : "-translate-x-full", "hoverEffect"
      )}>
        <div ref={sidebarRef} className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_light_green gap-6">
          <div className="flex items-center justify-between gap-5" >
            <Logo className="text-white" spanDesign="group-hover:text-white" />
            <button onClick={onClose} className="hover:text-shop_light_green hoverEffect">
              <X />
            </button>
          </div>

          <div className="flex flex-col space-y-3.5 font-semibold tracking-wide p-3.5">
            {HeaderData?.map((item) => (
              <Link href={item?.link} key={item?.title} 
              className={cn(
                "hover:text-shop_light_green hoverEffect",
                pathname === item?.link && "text-white"
              )}>
                {item?.title}
              </Link>
            ))}
          </div>

          <SocialMedia />
          
        </div>
    </div>
  )
}

export default SideMenu