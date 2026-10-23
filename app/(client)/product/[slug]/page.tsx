import React from "react";
import { getProductBySlug } from "@/sanity/queries";

const SingleProductPage = async ({params}:{params: Promise<{slug: string}>}) => {
    const {slug} = await params;
    const product = await getProductBySlug(slug);


    return (
        <div>ProductPage</div>
    );
};

export default SingleProductPage;