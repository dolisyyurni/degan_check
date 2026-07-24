import React from "react";
import { Button } from "@/components/ui/button";

const Home=() =>{
  return (
    <div className=" bg-shop_light_pink">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>lorem ipsum dolor sit amet</p>
      <Button variant="default" size="lg">
        Checkout
      </Button>
    </div>
  );
};

export default Home;