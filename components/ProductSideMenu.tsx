"use client";
import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import useStore from "@/store";
import { Heart } from "lucide-react";
import type { MouseEvent } from "react";
import toast from "react-hot-toast";

const ProductSideMenu = ({product, className,}: {
  product: Product;
  className?: string;
}) => {
  const existingProduct = useStore((state) =>
    state.favorites.some((item) => item._id === product._id)
  );

  const addFavorite = useStore((state) => state.addFavorite);

  const handleFavorite = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (product?._id) {
      await addFavorite(product);
      toast.success(existingProduct ? "Product removed from favorites" : "Product added to favorites successfully!"
      );
    }
  };
  
  return (
    <div
      className={cn("absolute top-2 right-2 hover:cursor-pointer", className)}
    >
      <button
        type="button"
        onClick={handleFavorite}
        aria-label={existingProduct ? "Remove from favorites" : "Add to favorites"}
        className={`p-2.5 rounded-full hover:bg-shop_dark_green/80 hover:text-white hoverEffect  ${existingProduct ? "bg-shop_dark_green/80 text-white" : "bg-lightColor/10"}`}
      >
        <Heart size={15} />
      </button>
    </div>
  );
};

export default ProductSideMenu;
