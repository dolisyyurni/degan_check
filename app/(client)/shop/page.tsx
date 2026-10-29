import Shop from '@/components/Shop'
import { getCategories } from '@/sanity/queries'
import React from 'react'

const ShopPage = async() => {
  const categories = await getCategories() as React.ComponentProps<typeof Shop>['categories']
  
  return (
    <div className="bg-white">
      <Shop categories={categories} />
    </div>
  )
}

export default ShopPage