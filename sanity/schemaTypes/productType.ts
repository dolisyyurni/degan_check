import { defineField, defineType } from "sanity";
import { TrolleyIcon } from "@sanity/icons";

export const productType = defineType({
    name: "product",
    title: "Products",
    type: "document",
    icon: TrolleyIcon,
    fields: [
        defineField({
            name: "title",
            title: "Product Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "images",
            title: "Product Images",
            type: "array",
            of: [{type: "image", options: {hotspot: true}}],
        }),

        defineField({
            name: "description",
            title: "Product Description",
            type: "string",
        }),

        defineField({
            name: "price",
            title: "Price",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),

        defineField({
            name: "discount",
            title: "Discount",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),

        defineField({
            name: "category",
            title: "Category",
            type: "array",
            of: [{type: "reference", to: {type: "category"}}],
        }),

        defineField({
            name: "stock",
            title: "Stock",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),

        defineField({
            name: "brand",
            title: "Brand",
            type: "reference",
            to: {type: "brand"},
        }),

        defineField({
            name: "status",
            title: "Product Status",
            type: "string",
            options: {
                list: [
                    { title: "New", value: "new" },
                    { title: "Sale", value: "sale" },
                    { title: "Hot", value: "hot" },
                ],
            },
        }),

        defineField({
            name: "variant",
            title: "Product Type",
            type: "string",
            options: {
                list: [
                    { title: "Drinks", value: "drinks"},
                    { title: "Food", value: "food" },
                ],
            }, 
        }),

        defineField({
            name: "isFeatured",
            title: "Featured Product",
            type: "boolean",
            description: "Toogle to featured on or off",
            initialValue: false,
        })
    ],

    preview: {
        select: {
            title: "name", 
            media: "images",
            subtitle: "price",
        },
        prepare(selection) {
            const { title, subtitle, media } = selection;
            const image = media && media[0];
            return {
                title: title,
                subtitle: `$${subtitle}`,
                media: image,
            }
        }
    }
})