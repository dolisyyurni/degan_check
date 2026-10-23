"use client"
import { Category } from '@/sanity.types';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

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
    <div>
        t
    </div>
  )
}

export default CategoryProduct