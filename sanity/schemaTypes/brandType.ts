import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const brandType = defineType({
    name: "brand",
    title: "Brands",
    type: "document",
    icon: TagIcon,
    fields: [
        defineField({
            name: "name",
            type: "string",
        }),

        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "description",
            type: "text",
        }),

        defineField({
            name: "image",
            title: "Barand Image",
            type: "image",
            options: {
                hotspot: true,
            },
        })
    ],
    
    preview: {
        select: {
            title: "title",
            subtitle: "description",
            media: "image",
        }
    }
})