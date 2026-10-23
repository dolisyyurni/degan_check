import React from "react";
import { getProductBySlug } from "@/sanity/queries";
import  Container  from "@/components/Container";

const SingleProductPage = async ({params}:{params: Promise<{slug: string}>}) => {
    const {slug} = await params;
    const product = await getProductBySlug(slug);


    return (
    <Container className="flex flex-col md:flex-row gap-10 py-10 pb-10">
        <div>
            images
        </div>

        <div>
            details
        </div>
    </Container>
)};

export default SingleProductPage;