import React from 'react'
import { productType } from '@/constants/data'
import Link from 'next/link'

interface Props {
    selectedTab: string;
    onSelectTab: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onSelectTab }: Props) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
        <div className="flex items-center gap-3 text-sm font-semibold">
            {productType?.map((item)=>(
                <button key={item?.title} className={'border border-shop_light_green/30 px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect'}>
                    {item?.title}
                </button>
            ))}
        </div>

        <Link href="/shop" className="border border-shop_light_green/30 px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect">See all</Link>
    </div>
  )
}

export default HomeTabBar