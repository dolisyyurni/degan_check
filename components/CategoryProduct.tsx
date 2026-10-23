"use client"
import { Category } from '@/sanity.types';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Button } from './ui/button';

interface Props {
    categories: Category[];
    slug: string;
}

const CategoryProduct = ({categories, slug}: Props) => {
  const [currentSlug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="py-5 flex flex-col md:flex-row items-start gap-5">
        <div className="flex flex-col md:main-w-40 border">
          {categories?.map((item)=>(
            <Button key={item?._id} className={`bg-transparent border-0 p-0 rounded-none text-darkColor shadow-none hover:bg-shop_orange hover:text-white font-semibold hoverEffect border-b last:border-b-0 capitalize`}>
              <p className="w-full text-left px-2">
                {item?.title}
              </p>
            </Button>
          ))}
        </div>
    </div>
  )
}

export default CategoryProduct