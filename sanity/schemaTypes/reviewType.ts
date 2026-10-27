import { defineField, defineType } from "sanity";

export const reviewType = defineType({
  name: "review",
  title: "Product Reviews",
  type: "document",
  fields: [
    defineField({
      name: "product",
      title: "Product",
      type: "reference",
      to: [{ type: "product" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clerkUserId",
      title: "Clerk User ID",
      type: "string",
      validation: (Rule) => Rule.required(),
      hidden: true,
    }),
    defineField({
      name: "authorName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.required().integer().min(1).max(5),
    }),
    defineField({
      name: "comment",
      title: "Review",
      type: "text",
      validation: (Rule) => Rule.required().min(10).max(1000),
    }),
  ],
  preview: {
    select: { title: "authorName", subtitle: "rating", productName: "product.name" },
    prepare({ title, subtitle, productName }) {
      return { title: `${title} · ${subtitle}/5`, subtitle: productName || "Product review" };
    },
  },
});
