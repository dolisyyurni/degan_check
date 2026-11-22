import { Product } from '@/sanity.types';
import useStore from '@/store';
import { Minus, Plus } from 'lucide-react';
import React from 'react'
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface Props {
    product: Product;
    className?: string;
}

const QuantityButtons = ({ product, className }: Props) => {
    const {addItem, removeItem, getItemCount} = useStore();
    const itemCount = getItemCount(product?._id);
    const isOutOfStock = product?.stock === 0;

    return (
    <div className={cn("flex items-center gap-1 pb-1 text-base", className)}>
        <Button 
        variant="outline" 
        size="icon" 
        disabled={itemCount === 0 || isOutOfStock}
        className="w-6 h-6 border-[1px] hover:bg-shop_dark_green/20 hoverEffect">
            <Minus />
        </Button>

        <span className="font-semibold text-sm w-6 text-center text-darkColor">{itemCount}</span>

        <Button
        variant="outline" 
        size="icon" 
        disabled={isOutOfStock}
        className="w-6 h-6 border-[1px] hover:bg-shop_dark_green/20 hoverEffect">
            <Plus />
        </Button>
    </div>
  )
}

export default QuantityButtons