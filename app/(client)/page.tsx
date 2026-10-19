import React from "react";
import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import HomeCategories from "@/components/HomeCategories";

const Home=() =>{
  return (
    <Container>
      <HomeBanner />
      <div className= "py-10">
        <ProductGrid />
      </div>
      <HomeCategories />
    </Container>
  );
};

export default Home;