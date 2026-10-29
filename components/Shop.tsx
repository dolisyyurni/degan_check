"use client"
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
        <div>

        </div>

        <div>

        </div>
      </Container>
    </div>
  )
}

export default Shop