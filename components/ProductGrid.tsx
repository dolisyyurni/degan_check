"use client";
import { useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { productType } from "@/constants/data";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");

  return (
    <div>
      <HomeTabBar selectedTab={selectedTab} onSelectTab={setSelectedTab} />
    </div>
  )
}

export default ProductGrid  