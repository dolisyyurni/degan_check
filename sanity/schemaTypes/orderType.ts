import { defineField, defineArrayMember, defineType } from "sanity";
import { BasketIcon } from "@sanity/icons";

export const orderType = defineType({
    name: "order",
    title: "Orders",
    type: "document",
    icon: BasketIcon,
    fields: [
        defineField({
            name: "orderId",
            title: "Order ID",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        {
            name: "invoice",
            type: "object",
            fields: [
                { name: "id", type: "string" },
                { name: "number", type: "string" },
                { name: "hosted_invoice_url", type:"url" },
            ]
        },

        defineField({
            name: "stripeCheckoutSessionId",
            title: "Stripe Checkout Session ID",
            type: "string",
        }),

        defineField({
            name: "stripeCustomerId",
            title: "Stripe Customer ID",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "clerkUserId",
            title: "Store User ID",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "customerName",
            title: "Customer Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "email",
            title: "Customer Email",
            type: "string",
            validation: (Rule) => Rule.required().email(),
        }),

        defineField({
            name: "stripePaymentIntentId",
            title: "Stripe Payment Intent ID",
            type: "string",
        }),

        defineField({
            name: "products",
            title: "Products",
            type: "array",
            of: [
                defineArrayMember({
                    type: "object",
                    fields: [
                        defineField({
                            name: "product",
                            title: "Product Bought",
                            type: "reference",
                            to: [{ type: "product" }],
                        }),
                        defineField({
                            name: "quantity",
                            title: "Quantity",
                            type: "number",
                        })
                    ],

                    preview: { 
                        select: {
                            product: "product.name",
                            quantity: "quantity",
                            image: "product.images",
                            price: "product.price",
                            currency: "product.currency",
                        },
                        prepare(select){
                            return {
                                title: `${select.product} x ${select.quantity}`,
                                subtitle: `${select.price} * ${select.quantity}`,
                                media: select.image,
                            }
                        }
                    }
                }),
            ],
        }),

        defineField({
            name: "totalPrice",
            title: "Total Price",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),

        defineField({
            name: "currency",
            title: "Currency",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "amountDiscount",
            title: "Amount Discount",
            type: "number",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "address",
            title: "Shipping Address",
            type: "object",
            fields: [
                { name: "subdistrict", title: "Sub District", type: "string" },
                { name: "zip", title: "ZIP Code", type: "string" },
                { name: "city", title: "City", type: "string" },
                { name: "addressLine1", title: "Address", type: "string" },
                { name: "name", title: "Name", type: "string" },
            ],
        }),

        defineField({
            name: "status",
            title: "Order Status",
            type: "string",
            options: {
                list: [
                    { title: "Pending", value: "pending" },
                    { title: "Processing", value: "processing" },
                    { title: "Paid", value: "paid" },
                    { title: "Shipped", value: "shipped" },
                    { title: "Out for Delivery", value: "out_for_delivery" },
                    { title: "Delivered", value: "delivered" },
                    { title: "Cancelled", value: "cancelled" },
                ]
            }
        }),

        defineField({
            name: "orderDate",
            title: "Order Date",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),
    ],

    preview: {
        select: {
            name: "customerName",
            amount: "totalPrice",
            currency: "currency",
            orderId: "orderId",
            email: "email",
        },
        prepare(select){
            const orderIdSnippet = `${select.orderId.slice(0, 5)}...${select.orderId.slice(-5)}`;
            return {
                title: `${select.name} (${orderIdSnippet})`,
                subtitle: `${select.amount} ${select.currency}, ${select.email}`,
            media: BasketIcon,
            }
        }
    }
});