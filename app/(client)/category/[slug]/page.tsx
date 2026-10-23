import CategoryProduct from '@/components/CategoryProduct';
import Container from '@/components/Container';
import { Title } from '@/components/ui/text';
import { getCategories } from '@/sanity/queries';
import { notFound } from 'next/navigation';
import React from 'react'

const CategoryPage = async({params}:{params: Promise<{slug: string}>}) => {
    const { slug } = await params;
    const categories = await getCategories();
    if (!categories?.some((category) => category.slug?.current === slug)) {
        notFound();
    }

    return (
        <div className="py-10">
            <Container>
                <Title>
                    Product by Categories:{" "}
                    <span className="font-bold text-green-600 capitalize tracking-wide">
                        {slug && slug}
                    </span>
                </Title>

                <CategoryProduct categories={categories} slug={slug}/>
            </Container>
        </div>
    )
}

export default CategoryPage
