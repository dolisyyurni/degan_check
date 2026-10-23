"use client"
import { HeaderData } from "@/constants/data"
import { usePathname } from "next/navigation";
import Link from "next/link"
import { cn } from "@/lib/utils";
import React from "react";

const HeaderMenu = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-10 capitalize font-semibold text-lightColor font-normal justify-center">
    {HeaderData?.map((item) => (
        <Link
          key={item.title}
          href={item.link}
          className={cn(
            "hover:text-shop_light_green hoverEffect relative group",
              pathname === item.link && "text-shop_light_green"
          )}
        >
            {item?.title} 
            <span
              className={cn(
                "absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 group-hover:left-0 hoverEffect",
                pathname === item.link && "left-0 w-1/2"
              )}
            />

            <span 
              className={cn(
                "absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 hoverEffect group-hover:right-0",
                pathname === item.link && "right-0 w-1/2"
              )} />
        </Link>
    ))}
    </div>
  )
}

export default HeaderMenu