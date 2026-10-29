import { Title } from '../ui/text';
import { Category } from '@/sanity.types';
import React from 'react';

interface Props {
    caegories: Category[];
    selectedCategory?: string | null;
    setSelectedCategory: (React.Dispatch<React.SetStateAction<string | null>>);
}

const CategoryList = ({ categories, selectedCategory, setSelectedCategory }: Props) => {
  return (
    <div className="w-full bg-white p-5">
        <Title className="text-base">
            Product Categories
        </Title>
    </div>
  )
}

export default CategoryList