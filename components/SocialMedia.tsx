import { Camera, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import React from 'react'

interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const socialLink = [
    {
        title: "Instagram",
        href: "https://www.instagram.com/degan_check",
        icon: <Camera className="w-5 h-5" />,
    },
    {
        title: "Location",
        href: "https://maps.app.goo.gl/cjwVDDoSftQWMoqA7",
        icon: <MapPin className="w-5 h-5" />,
    },
]

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
    return (
        <TooltipProvider>
            <div className={cn("flex items-center gap-3.5", className)}>
                {socialLink?.map((item) => (

                    <Tooltip key={item.title}>
                        <TooltipTrigger asChild>
                            <Link key={item?.title} target="_blank" rel="noopener noreferrer"href={item?.href} className={cn("p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect", iconClassName)}>
                                {item?.icon}
                            </Link>
                        </TooltipTrigger>

                        <TooltipContent className={cn("bg-white text-darkColor font-semibold")}>
                            {item?.title}
                        </TooltipContent>
                    </Tooltip>

                ))}
            </div>
        </TooltipProvider>
    )
}
export default SocialMedia