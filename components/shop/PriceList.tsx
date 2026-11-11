import { Label } from '@/components/ui/label';
import { Title } from '../ui/text';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import React from 'react'

const priceArray = [
  { title: "Under Rp 20.000", value: "0-20000" },
  { title: "10.000 - 20.000", value: "10000-20000" },
  { title: "20.000 - 30.000", value: "20000-30000" },
  { title: "30.000 - 40.000", value: "30000-40000" },
  { title: "40.000 - 50.000", value: "40000-50000" },
  { title: "Over Rp 50.000", value: "50000+" },
]

interface Props {
  selectedPrice?: string | null;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string | null>>;
}

const PriceList = ({ selectedPrice, setSelectedPrice }: Props) => {
  return (
    <div className="w-full bg-white p-5">
      <Title className="text-base" >Price</Title>

      <RadioGroup className="mt-2 space-y-1" >
        {priceArray?.map((price, index) => (
          <div 
          key={index}
          onClick={() => setSelectedPrice(price?.value)} 
          className="flex item-center space-x-2 hover:cursor-pointer" >
            <RadioGroupItem value={price?.title} 
            id={price?.value}
            className="rounded-sm" />

            <Label htmlFor={priceArray[0]?.value}>
              {price?.title}
            </Label>
          </div>
        ))}
      </RadioGroup>

      {selectedPrice && (
        <button
        onClick={() => setSelectedPrice(null)}
        className="text-sm font-medium mt-2 underline underline-offset-2 decoration-[1px] text-shop_light_green hover:text-shop_dark_green hoverEffect">
          Reset selection
        </button>
      )}
    </div>
  )
}

export default PriceList