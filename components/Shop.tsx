"use client"
import { Title } from './ui/text';
import { Category } from '@/sanity.types';
import React from 'react'
import Container from './Container';

interface Props {
  categories: Category[]
}

const Shop = async({ categories }: Props) => {
  
  return (
    <div className="border-t"> 
      <Container className="mt-5">
        <div className="sticky top-0 z-10 mb-5">
          <div className="flex items-center justify-between">
            <Title className="text-lg uppercase tracking-wide">Get the food you crave</Title>
            <button className="text-shop_dark_green underline text-sm mt-2 font-medium hover:text-darkRed hover:text-shop_orange hoverEffect">Reset Filters</button>
          </div>
        </div>

        <div>
          
        </div>
      </Container>
    </div>
  )
}

export default Shop