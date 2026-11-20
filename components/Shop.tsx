"use client"
import { client } from '@/sanity/lib/client';
import { Loader2 } from 'lucide-react';
import { Title } from './ui/text';
import { Category, Product } from '@/sanity.types';
import React, { useState, useEffect } from 'react'
import Container from './Container';
import CategoryList from './shop/CategoryList';
import PriceList from './shop/PriceList';
import NoProductAvailable from '@/components/NoProductAvailable';
import ProductCard from '@/components/ProductCard';
import { useSearchParams } from 'next/navigation';

interface Props {
  categories: Category[]
}

const Shop = ({ categories }: Props) => {
  const searchParams = useSearchParams();
  const categoryParam = searchParams?.get("category");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState< string | null >(categoryParam || null);
  const [selectedPrice, setSelectedPrice] = useState< string | null >(null);
  useEffect(() => {
    let cancelled = false;

    const fetchProducts = async () => {
    setLoading(true);
    try {
      let minPrice = 0;
      let maxPrice: number | null = null;
      if (selectedPrice) {
        if (selectedPrice.endsWith("+")) {
          minPrice = Number(selectedPrice.slice(0, -1));
        } else {
          const [min, max] = selectedPrice.split("-").map(Number);
          minPrice = min;
          maxPrice = max;
        }
      }
      const query = `
      *[_type == "product"
        && (!defined($selectedCategory) || references(*[_type == "category" && slug.current == $selectedCategory]._id))
        && price >= $minPrice
        && (!defined($maxPrice) || price <= $maxPrice)]
      | order(name asc) {
        ..., "category": category[]->title
      }
      `;

      const data = await client.fetch<Product[]>(
        query,
        { selectedCategory, minPrice, maxPrice }
      );
      if (!cancelled) setProducts(data ?? []);
    } catch (error) {
      console.log("Shop Product Fetching  Error", error);
      if (!cancelled) setProducts([]);
    } finally {
      if (!cancelled) setLoading(false);
    }
    };

    void fetchProducts();
    return () => {
      cancelled = true;
    };
  }, [selectedCategory, selectedPrice]);
  
  return (
    <div className="border-t"> 
      <Container className="mt-5">
        <div className="sticky top-0 z-10 mb-5">
          <div className="flex items-center justify-between">
            <Title className="text-lg uppercase tracking-wide">
              Get the food as you crave
            </Title>

            {(selectedCategory !== null || selectedPrice !== null) && (
              <button 
              onClick={() => {
                setSelectedCategory(null);
                setSelectedPrice(null);
              }}
              className="text-shop_dark_green underline text-sm mt-2 font-medium hover:text-darkRed hover:text-shop_orange hoverEffect">
                Reset Filters
              </button>
            )}
            
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 border-t border-shop_dark_green/50">
          <div className="md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-y-auto md:min-w-64 pb-5 md:border-r border-r-shop_btn_dark_green/50 scrollbar-hide">
            <CategoryList categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            
            <PriceList selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice} />
          </div>

          <div>
            <div className="flex-1 pt-5">
              <div className="h-[calc(100vh-160px)] overflow-auto pr-2 scrollbar-hide">
                {loading ? (
                  <div className="p-20 flex flex-col gap-2 items-center justify-center bg-white">
                    <Loader2 className="w-10 h-10 text-shop_dark_green animate-spin"/>
                    <p className="font-semibold tracking-wide text-base">
                      Loading products...
                    </p>
                  </div>

                ) : products?.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                      {products?.map((product) => (
                        <ProductCard key={product._id} product={product} />
                      ))}
                    </div>
                  ):(
                  <NoProductAvailable className="bg-white mt-0"/>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Shop
