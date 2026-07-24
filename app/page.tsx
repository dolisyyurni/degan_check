import React from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";

const Home=() =>{
  return (
    <Container>
      <h2 className="text-xl font-semibold">Home</h2>
      <p>lorem ipsum dolor sit amet lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
      <Button variant="default" size="lg">
        Checkout
      </Button>
    </Container>
  );
};

export default Home;