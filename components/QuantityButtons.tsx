import { Product } from '@/sanity.types';
import useStore from '@/store';
import React from 'react'

interface Props {
    product: Product;
    className?: string;
}

const QuantityButtons = ({ product, className }: Props) => {
    const {addItem, removeItem, getItemCount} = useStore();
    const itemCount = getItemCount(product?._id);
    const isOutOfStock = product?.stock === 0;
    return (
    <div>QuantityButtons</div>
  )
}

export default QuantityButtons