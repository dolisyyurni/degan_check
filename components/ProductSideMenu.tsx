"use client";
import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import useStore from "@/store";
import { Heart } from "lucide-react";
import type { MouseEvent } from "react";
import toast from "react-hot-toast";

const ProductSideMenu = ({product, className, inline = false,}: {
  product: Product;
  className?: string;
  inline?: boolean;
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
    <div className={cn(inline ? "shrink-0" : "absolute top-2 right-2 hover:cursor-pointer", className)}>
      <button
        type="button"
        onClick={handleFavorite}
        aria-label={existingProduct ? "Remove from favorites" : "Add to favorites"}
        aria-pressed={existingProduct}
        className={cn(
          inline
            ? "inline-flex h-9 w-9 items-center justify-center self-start rounded-md border border-shop_light_green/80 hover:bg-shop_dark_green/80 hover:text-white hoverEffect"
            : "p-2.5 rounded-full hover:bg-shop_dark_green/80 hover:text-white hoverEffect",
          existingProduct ? "bg-shop_dark_green/80 text-white" : "bg-lightColor/10"
        )}
      >
        <Heart size={inline ? 20 : 15} fill={existingProduct ? "currentColor" : "none"} />
      </button>
    </div>
  );
};

export default ProductSideMenu;
