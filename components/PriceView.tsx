import React from 'react'
import PriceFormatter from './PriceFormatter';

interface Props {
    price: number | undefined;
    discount: number | undefined;
    className?: string;
}

const PriceView = ({price, discount, className}: Props) => {
    const discountedPrice =
        price !== undefined && discount !== undefined
            ? price - (price * discount) / 100
            : price;

    return (
        <div>
            {discountedPrice !== undefined &&( 
                <PriceFormatter amount={discountedPrice} className="text-shop_dark_green"/>
            )}
        </div>
    )    
}

export default PriceView;