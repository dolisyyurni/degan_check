import React from 'react'
import { Product } from '@/sanity.types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Flame } from 'lucide-react'
import AddToWishListButton from './AddToWishListButton';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="text-sm border-[1px] border-dark_blue/20 rounded-md bg-white group">
      <div className="relative group overflow-hidden bg-shop_light_bg">
        {product?.images && 
        <Image 
        src={urlFor(product?.images[0]).url()} 
        alt="ProductImage" loading="lazy" width={700} height={700} 
        className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop_light_bg hoverEffect
            ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
        /> }

        <AddToWishListButton product={product} />
        {product?.status === "sale" && (
            <p className={cn(
                "absolute left-2 top-3 z-10 text-xs",
                "border border-darkColor/50 px-2 rounded-full",
                "group-hover:border-shop_light_green group-hover:text-shop_light_green hoverEffect"
            )}>
                Sale!
            </p>
        )}

        {product?.status === "new" && (
            <p className={cn(
                "absolute left-2 top-2 z-10 text-xs",
                "border border-darkColor/50 px-2 rounded-full",
                "group-hover:border-shop_light_green group-hover:text-shop_light_green hoverEffect"
            )}>
                New!
            </p>
        )}

        {product?.status ==="hot" && (<Link
            href={"/deal"}
            className={cn(
                "absolute top-2 left-2 z-10",
                "border border-shop_orange/50 p-1 rounded-full",
                "group-hover:border-shop_orange hover:text-shop_dark_green hoverEffect"
            )}
            >
                <Flame 
                    size={18}
                    fill="#fb6c08"
                    className={cn(
                        "text-shop_orange/50 group-hover: text-shop_orange hoverEffect"
                    )}
                />
        </Link>
        )}
      </div>

      <div className="p-3">
        {product?.category && <p>{product?.category?.map((cat) => cat).join(", ")}</p>}
      </div>
    </div>
  )
}

export default ProductCard