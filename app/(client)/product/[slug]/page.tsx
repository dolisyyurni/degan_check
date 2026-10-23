import React from "react";

const SingleProductPage = async ({params}:{params: Promise<{slug: string}>}) => {
    const {slug} = await params;

    return (
        <div>ProductPage</div>
    );
};

export default SingleProductPage;