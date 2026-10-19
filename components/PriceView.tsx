import React from 'react'
import PriceFormatter from './PriceFormatter';

interface Props {
    price: number | undefined;
    discount: number | undefined;
    className?: string;
}

const PriceView = ({price, discount, className}: Props) => {

    return (
        <div>
            <PriceFormatter amount={price} className="text-shop_dark_green"/>
            {price && discount && (<PriceFormatter 
            amount={price + (discount * price) / 100} 
            className="line-through font-normal text-shop_lighter_text" />)}
        </div>
    )    
}

export default PriceView;