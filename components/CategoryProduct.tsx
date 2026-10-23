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
        <div>
          {categories?.map((item)=>(
            <Button>
              <p>
                {item?.title}
              </p>
            </Button>
          ))}
        </div>
    </div>
  )
}

export default CategoryProduct