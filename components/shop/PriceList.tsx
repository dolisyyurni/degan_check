import React from 'react'

const priceArray = [
  { title: "Under Rp 10.000", value: "0-10000" },
  { title: "10.000 - 20.000", value: "10000-20000" },
  { title: "20.000 - 30.000", value: "20000-30000" },
  { title: "30.000 - 40.000", value: "30000-40000" },
  { title: "40.000 - 50.000", value: "40000-50000" },
  
]

interface Props {
  selectedPrice?: string | null;
  setSelectedPrice: React.Dispatch<React.SetStateaction<(string | null)>>;
}

const PriceList = ({ selectedPrice, setSelectedPrice }: Props) => {
  return (
    <div>PriceList</div>
  )
}

export default PriceList