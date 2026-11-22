'use client';
import { Product } from '@/sanity.types';
import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import useStore from '@/store';

const FavoriteButton = ({
  showProduct = false,
  product,
} : {
  showProduct?: boolean;
  product?: Product | null | undefined;
}) => {
  const favoriteCount = useStore((state) => state.favorites.length);

  return (
    <>
      {!showProduct ? (
        <Link href={"/wishlist"} className="group relative">
          <Heart className="w-5 h-5 hover:text-shop_light_green hoverEffect" />
          <span className="absolute -top-1 -right-1 bg-shop_dark_green text-white min-w-3.5 h-3.5 px-0.5 rounded-full text-[10px] font-semibold flex items-center justify-center">
            {favoriteCount}
          </span>
        </Link>
      ):(
        <button className="group relative hover:text-shop_light_green hoverEffect border border-shop_light_green/80 hover:border-shop_light_green p-1.5 rounded-sm" >
          <Heart className="text-shop_light_green/80 group-hover:text-shop_light_green hoverEffect mt-0.5 w-5 h-5" />
        </button>
      )}
    </>
  )
}

export default FavoriteButton
